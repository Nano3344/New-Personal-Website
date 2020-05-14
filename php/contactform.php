<?php
    $username = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    if(empty($username) || empty($email) || empty($subject) || empty($message)) {
      echo: '<h4>Please fill in the form</h4>';
    } else {
      
      $to = "malik.ebers@web.de";
      mail($to, $subject, $message, $email);

    }

 ?>
