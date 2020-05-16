<?php
    $username = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];
    $to = "malik.ebers@web.de";

    if(empty($username) || empty($email) || empty($subject) || empty($message)) {
      echo: 'Please fill in the form';
    } else {

      mail($to, $subject, $message, $email);

    }

 ?>
