<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include('./database.php');

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$color = $_POST['color'];
$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($db, $query);

if($user = mysqli_fetch_assoc($result)) {
	echo json_encode(false);
}
else {
	$query = "INSERT INTO users (firstName, lastName, color, email, password) VALUES ('$firstName', '$lastName', '$color', '$email', '$password')";
	$result = mysqli_query($db, $query);

	if ($result) {
		echo json_encode([
			'firstName' => $firstName,
			'lastName' => $lastName,
			'color' => $color,
			'email' => $email,
			'password' => $password,
		]);
	}
}


