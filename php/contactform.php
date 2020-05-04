<?php
  if(isset($_POST['submit'])) {
    $username = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if(empty($username) || empty($email) || empty($subject) || empty($message)) {
      echo: '<h4>Please fill in the form</h4>';
    } else {
      $to = "malik.ebers@web.de";

      if(mail($to, $subject, $message, $email)) {
        echo: '<h4>Form has been submitted</h4>';
      }
    }
  } 
 ?>
