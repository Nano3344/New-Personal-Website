<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from = $email;

  $email_subject = 'Subject';

  $email_body = "User Name: $name.\n",
                "User Email: $email.\n",
                "User Message: $message.\n";

  $to = "malik.ebers@web.de";

  $headers = "From: $email_from \r\n";

  $headers = "Reply-to: $email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header("Location: ./index.html");
 ?>
