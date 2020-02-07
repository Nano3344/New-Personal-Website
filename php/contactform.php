<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $betreff = $_POST['betreff'];
  $nachricht = $_POST['nachricht'];

  $email_from = $email;

  $email_subject = 'Anfrage';

  $email_body = "User Name: $name.\n",
                "User Email: $email.\n",
                "User Message: $message.\n";

  $to = "malik.ebers@web.de";

  $headers = "Von: $email_from \r\n";

  $headers = "Antworten-auf: $email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header("Location: Kontakt.html");
 ?>
