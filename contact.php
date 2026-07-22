<?php
/* =====================================================================
 * contact.php — enquiry handler for creditforcredit.org
 *
 * Replaces the third-party FormSubmit service so enquiry data (names,
 * emails, phone numbers) never leaves our own server. That matters under
 * POPIA, and it matches what record.html promises learners.
 *
 * Runs on the live Apache/Xneelo host only. GitHub Pages cannot execute
 * PHP, so brand.js points the preview at FormSubmit instead.
 *
 * DELIVERABILITY: the From address MUST be a real mailbox on this domain.
 * Putting the visitor's address in From fails SPF (this server is not
 * authorised to send as gmail.com) and lands us in spam. The visitor goes
 * in Reply-To, so hitting reply still works.
 * ===================================================================== */

declare(strict_types=1);

const MAILBOX   = 'hello@creditforcredit.org';  // real mailbox — From and To
const SITE_NAME = 'Credit for Credit';
const LOG_FILE  = __DIR__ . '/../enquiries.log'; // ABOVE the web root
const MIN_SECONDS = 3;                           // faster than this is a bot

/* ---------- helpers ---------- */

/** Strip CR/LF so user input can never inject extra mail headers. */
function header_safe(string $v): string {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v));
}

function post(string $key): string {
    return isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
}

/** Only ever redirect within our own site — an open redirect is a phishing gift. */
function safe_redirect(string $target, string $fallback = '/thanks'): void {
    /* strpos(...) === 0 rather than str_starts_with(): that function is PHP 8+
       and shared hosting is often still on 7.4. */
    $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';
    $ok   = $target !== '' && (
        strpos($target, '/') === 0 ||
        strpos($target, 'https://' . $host . '/') === 0 ||
        strpos($target, 'http://' . $host . '/') === 0
    );
    /* "//evil.com" is protocol-relative and would leave the site. */
    if (strpos($target, '//') === 0) { $ok = false; }
    header('Location: ' . ($ok ? $target : $fallback), true, 303);
    exit;
}

/** Append to the log; never let a logging problem lose the enquiry. */
function log_enquiry(array $row): void {
    $line = json_encode($row, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if (@file_put_contents(LOG_FILE, $line . PHP_EOL, FILE_APPEND | LOCK_EX) === false) {
        error_log('[creditforcredit] could not write ' . LOG_FILE . ' — ' . $line);
    }
}

/* ---------- 1. only accept posts ---------- */

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    safe_redirect('/contact');
}

/* ---------- 2. bot checks (silent — never tell a bot why) ---------- */

if (post('_honey') !== '') {
    safe_redirect(post('_next'));           // looks like success, sends nothing
}
$ts = post('_ts');
if ($ts !== '' && ctype_digit($ts) && (time() - (int) round(((int) $ts) / 1000)) < MIN_SECONDS) {
    safe_redirect(post('_next'));
}

/* ---------- 3. validate ---------- */

$name    = post('name');
$email   = post('email');
$company = post('company');
$phone   = post('phone');
$type    = post('enquiry_type');
$staff   = post('staff_count');
$message = post('message');

$errors = [];
if ($name === '')                                        { $errors[] = 'name'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL))          { $errors[] = 'email'; }
if (mb_strlen($message) > 5000)                          { $errors[] = 'message'; }

if ($errors) {
    header('Location: /contact?error=' . implode(',', $errors), true, 303);
    exit;
}

/* ---------- 4. log FIRST, so an enquiry is never lost to a mail failure ---- */

$received = date('c');
log_enquiry([
    'at'      => $received,
    'name'    => $name,
    'email'   => $email,
    'company' => $company,
    'phone'   => $phone,
    'type'    => $type,
    'staff'   => $staff,
    'message' => $message,
    'ip'      => $_SERVER['REMOTE_ADDR'] ?? '',
]);

/* ---------- 5. send ---------- */

$fields = [
    'Name'                => $name,
    'Email'               => $email,
    'Company'             => $company,
    'Phone'               => $phone,
    'Enquiry about'       => $type,
    'Staff to train'      => $staff,
];

$body = "New enquiry from " . SITE_NAME . "\n";
$body .= str_repeat('=', 46) . "\n\n";
foreach ($fields as $label => $value) {
    if ($value !== '') {
        $body .= str_pad($label . ':', 18) . $value . "\n";
    }
}
$body .= "\nMessage:\n" . ($message !== '' ? $message : '(none given)') . "\n\n";
$body .= str_repeat('-', 46) . "\n";
$body .= "Received: $received\n";

$subject = post('_subject') !== '' ? post('_subject') : 'New enquiry';

/* From is OUR mailbox (SPF), the visitor is Reply-To. Both header-sanitised. */
$headers = [
    'From: ' . SITE_NAME . ' <' . MAILBOX . '>',
    'Reply-To: ' . header_safe($name) . ' <' . header_safe($email) . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(
    MAILBOX,
    header_safe($subject),
    $body,
    implode("\r\n", $headers),
    '-f' . MAILBOX          // envelope sender, so bounces come back to us
);

if (!$sent) {
    // The enquiry is already in the log, so nothing is lost — but shout about it.
    error_log('[creditforcredit] mail() failed for enquiry from ' . $email);
}

/* ---------- 6. done ---------- */

safe_redirect(post('_next'));
