<?php

	global $db_wp;
	global $db_mobile;
	
	$hostname = "93.89.225.191:3306"; 

	$username1 = "nclclear";
	$password1 = "Co2y23dd";
	$dbname1   = "nclclear_clearf";
	
	$username2 = "apmrealt";
	$password2 = "Bhq2a7y7";
	$dbname2   = "apmrealt_dr1234";
	
	$db_mobile = new PDO("mysql:dbname=" . $dbname1 . ";host=" . $hostname . ";charset=utf8", $username1, $password1);
	 
	$db_wp = new PDO("mysql:dbname=" . $dbname2 . ";host=" . $hostname . ";charset=utf8", $username2, $password2);

?>