<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "dave.fio991@gmail.com"; 
  $subject = "New Contact Form Submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message;

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message!";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>