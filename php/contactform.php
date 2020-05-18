<?php
    $username = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    if(empty($username) || empty($email) || empty($subject) || empty($message)) {
      echo: 'Please fill in the form';
    } else {
      echo: 'Message was sent';
      mail("malik.ebers@web.de", $subject, $message, $email);

    }

 ?>
