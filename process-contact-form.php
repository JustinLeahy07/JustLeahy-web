<?php
require 'vendor/autoload.php'; // Include the Mailgun library
use Mailgun\Mailgun;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace 'YOUR_API_KEY' with your actual Mailgun API key
    $mgClient = new Mailgun('287fbd5afca7d5779c13fb379711504f-28e9457d-e4cc6294');
    $domain = "sandbox1e6a54d5a2a64c628ca6b1ce97faab92.mailgun.org"; // Replace with your Mailgun domain

    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $result = $mgClient->sendMessage($domain, array(
        'from'    => 'Excited User <mailgun@sandbox1e6a54d5a2a64c628ca6b1ce97faab92.mailgun.org>',
        'to'      => 's1705256@online.houstonisd.org', // Replace with the recipient's email address
        'subject' => $subject,
        'text'    => $message,
    ));

    if ($result->http_response_code == 200) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
