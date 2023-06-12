<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include('./database.php');

/* if(isset($_POST)) {
	$email = $_POST['email'];
	$password = $_POST['password'];

	$query = "INSERT INTO users (email, password, VALUES ('$email', '$password')";
	$result = mysqli_query($dbs, $query);
} */

/* if(isset($_POST)) { */
	$email = $_POST['email'];
	$password = $_POST['password'];

	$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
	$result = mysqli_query($db, $query);

	if($user = mysqli_fetch_assoc($result)) {
		echo json_encode([
			'firstName' => $user['firstName'],
			'lastName' => $user['lastName'],
			'email' => $user['email'],
			'password' => $user['password'],
		]);
	}
	else {
		echo json_encode(false);
	}
/* }  */