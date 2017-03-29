<?php class DB_CONNECT{
private $con=null;

function __construct(){
	$this->connect();
}

function __destruct(){
	$this->close();
}

function connect(){
	require_once __DIR__ . '/config.php';
	$this->con=mysqli_connect(SERVER,USER,PASSWORD) ;//or echo "." . mysql_error();

	$db=mysqli_select_db($this->con,DATABASE);// or echo "." . mysql_error();

	return $this->con;
}

function close(){
	mysqli_close($this->con);
}
}
?>