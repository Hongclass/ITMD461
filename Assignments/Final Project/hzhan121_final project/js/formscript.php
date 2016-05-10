<?php

//Make short Variable names
$firstName = $_REQUEST['first_name_field'];
$lastName = $_REQUEST['last_name_field'];
$phone = $_REQUEST['phone_field'];
$email = $_REQUEST['email_field'];
$comments = $_REQUEST['comments_field'];
$gender = $_REQUEST['gender_field'];

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hong's Bakery House Form Processing Script</title>
		<style>
		.box {
			border: 1px solid #444;
			background-color: #ccc;
			margin: 20px 20px;
			padding: 5px 20px;
		}
	</style>
</head>
<body>
	<div style="text-align:center;">
		<h2>Hong's Bakery House Form Processing Script</h2>
		<p>This page will display the results of the form that was submitted to it.</p>
	</div>
	<hr><br>
	<h1>Thank you for your submission, <?php echo htmlentities($firstName) ?>!</h1>
	<div class="box">
	<h2>This section contains the information provided in the my info section:</h2>
		<p><strong>First Name:</strong> <?php echo htmlentities($firstName) ?></p>
		<p><strong>Last Name:</strong> <?php echo htmlentities($lastName) ?></p>
		<p><strong>Phone Number:</strong> <?php echo htmlentities($phone) ?></p>
		<p><strong>Email Address:</strong> <?php echo htmlentities($email) ?></p>
		<p><strong>Gender:</strong> <?php echo htmlentities($gender) ?></p>
	</div>
	<div class="box">
	<h2>This section contains the information provided in the availibility section:</h2>
	<h3>Comments:</h3>
	<p><?php echo nl2br(htmlentities($comments)) ?></p>
	</div>
</body>
</html>