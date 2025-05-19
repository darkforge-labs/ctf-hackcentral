<?php
// Read the contents of /var/www/html/secret.txt
$secret = trim(file_get_contents('/var/www/html/secret.txt'));
$flag = trim(file_get_contents('/var/flag.txt'));

// Check if the "session" cookie exists and matches the secret
if (!isset($_COOKIE['session']) || $_COOKIE['session'] !== $secret) {
    http_response_code(403);
    echo "403 Forbidden";
    exit;
}

echo "Flag: $flag";
echo "<br/>";
echo "Email the flag to <a href=\"mailto:ctf@darkforge.io\">ctf@darkforge.io</a> to enter the draw.";
?>

