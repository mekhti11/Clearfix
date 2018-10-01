<?php

	include "db.php";
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();
	
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8');
	
	$arr = array();
	
	if(isset($_POST['action'])) {
		if($_POST['action'] == 'detect') {
			$messages = $db_wp->query('SELECT * FROM wp_wpsp_ticket WHERE subject = "' . $_POST['name'] . ' ' . $_POST['surname'] . '"');
			if ( $messages->rowCount() ){
				foreach( $messages as $msg ){
					$arr = array('id' => $msg['created_by'], 'message' => 'success');
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
