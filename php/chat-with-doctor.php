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
		if($_POST['action'] == 'load') {
			$messages = $db_mobile->query('SELECT * FROM messages WHERE (receiver_id = ' . $_POST['your_id'] . ' AND sender_id = ' . $_POST['other_id'] . ') 
									 OR (receiver_id = ' . $_POST['other_id'] . ' AND sender_id = ' . $_POST['your_id'] . ') ORDER BY date');
			if ( $messages->rowCount() ){
				foreach( $messages as $msg ){
					array_push($arr, array('sender_id' => $msg['sender_id'], 'receiver_id' => $msg['receiver_id'], 'content' => $msg['content'], 'date' => $msg['date']));
				}
			}  
			
			echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		}
		if($_POST['action'] == 'send') {
			$sql  = "INSERT INTO messages (msg_id, receiver_id, sender_id, content, date) VALUES (?, ?, ?, ?, ?)";
			$exec = $db_mobile->prepare($sql);
			$exec->execute([rand(), $_POST['other_id'], $_POST['your_id'], $_POST['content'], date("Y-m-d H:i:s", strtotime("+3 hours"))]);
		}
	}
?>
