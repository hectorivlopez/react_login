<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include('./database.php');


$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

$query = "INSERT INTO users (firstName, lastName, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";

$result = mysqli_query($db, $query);

if($result) {
	echo json_encode([
		'firstName' => $firstName,
		'lastName' => $lastName,
		'email' => $email,
		'password' => $password,
	]);
}
else {
	echo json_encode(false);
}
