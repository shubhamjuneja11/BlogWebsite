<?php
require_once __DIR__ .'/connect.php';

$db=new DB_CONNECT();
$con=$db->connect();


$username=$email=$password="";
if($_SERVER["REQUEST_METHOD"]=="POST"){
	if(isset($_POST["username"])&&isset($_POST["email"])&&isset($_POST["password"])){
	$username=$_POST["username"];
	$email=	   $_POST["email"];
	$password=$_POST["password"];

$query="insert into user (username,email,password) values('$username','$email','$password')";

	$res=mysqli_query($con,$query) or die(mysqli_error($con));
	echo $res;

	
}
}
?>