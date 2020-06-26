<?php
if(isset($_POST['name2']) && isset($_POST['email2']) && isset($_POST['date']) && isset($_POST['time']) ){
  $date = $_POST['date'];
  $time = $_POST['time'];
  $name2 = $_POST['name2']; // HINT: use preg_replace() to filter the data
	$email2 = $_POST['email2'];
	$to = "malik.ebers@web.de";
	$from = $email2;
	$subject = 'Booked Call';
	$message = '<b>Date: </b>'.$date.' <b>Time: </b>'.$time.' <b>Name:</b> '.$name2.' <br><b>Email:</b> '.$email2;
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if(mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
