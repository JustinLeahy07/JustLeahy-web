
<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get your Mailgun API key from a secure source
    $apiKey = '287fbd5afca7d5779c13fb379711504f-28e9457d-e4cc6294';

    // Your Mailgun domain
    $domain = 'sandbox1e6a54d5a2a64c628ca6b1ce97faab92.mailgun.org';

    // Recipient email address
    $to = "s1705256@online.houstonisd.org";

    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $email = $_POST["email"];

    // Initialize the Mailgun client
    $mgClient = Mailgun::create($apiKey);

    try {
        $mgResult = $mgClient->messages()->send($domain, [
            'from'    => $email,
            'to'      => $to,
            'subject' => $subject,
            'text'    => $message,
        ]);

        if ($mgResult->http_response_code == 200) {
            echo "Message sent successfully!";
        } else {
            echo "Message sending failed.";
        }
    } catch (\Exception $e) {
        echo "An error occurred: " . $e->getMessage();
    }
}
?>
