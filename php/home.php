<?php

	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();

	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );

	$arr = array();
	
	if(isset($_POST['action'])) {
		if($_POST['action'] == 'check') {
			if($_POST['loginInfo'] == 'true') {
			$arr = array('message' => 'logged_in');	
			}
			else
			{
			$arr = array('message' => 'not_logged_in');
			}
		}
		if($_POST['action'] == 'logout') {
			$arr = array();
		}
	}


	echo json_encode($arr);
?>