<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/general.css">
    <title></title>
  </head>
  <body>

        <!-- Contact Form -->

        <div class="contact-background" id="contact-background"></div>
        <div class="contact-wrapper">
        <div class="contact-form">
          <form class="contact-content" action="./php/contactform.php">
            <span class="exit-button">&times;</span>
            <h2>Contact Me!</h2>
            <div class="section">
               <input class="name" type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="section">
               <input class="email" type="text" name="email" placeholder="Your email" required>
            </div>
            <div class="section">
               <input class="subject" type="text" name="subject" placeholder="Subject" required>
            </div>
            <div class="section">
               <textarea class="message" type="text" name="message" placeholder="Message..."></textarea>
            </div>
            <div class="button-section">
                <p class="submit" id="submit" type="submit" name="btn-send">Submit</p>
            </div>
          </form>
        </div>
      </div>
  </body>
</html>

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
