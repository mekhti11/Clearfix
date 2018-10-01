<?php

	include "db.php";
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();
	
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8');
	
	$arr = array();
	
	$name = explode(" ", $_POST['subject']);
	if(count($name) > 2) {
		while(count($name) > 2) {
			$name[0] = $name[0] . " " . $name[1];
			unset($name[count($name) - 1]);
		}
	}
	
	if(isset($_POST['action'])) {
		if($_POST['action'] == 'detect') {
			$messages = $db_mobile->query('SELECT * FROM kayit WHERE ad = "' . $name[0] . '" AND soyad = "' . $name[1] . '"');
			if ( $messages->rowCount() ){
				foreach( $messages as $msg ){
					$arr = array('id' => $msg['id'], 'message' => 'success');
				}
			}  
			else
			{
				$arr = array('message' => 'failure');
			}
			
			echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		}
	}
?>
