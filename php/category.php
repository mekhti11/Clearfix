<?php
	include 'db.php';
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );
	
	$arr = array();
	
    if(isset($_POST['action'])) {
		if($_POST['action'] == 'load') {
			$q[0] = $db_wp->query("SELECT * FROM wp_wpsp_ticket WHERE created_by = " . $_POST['id']);
			$arr['row0'] = $q[0]->rowCount();
			for($i = 0; $i < 9; $i++) {
				$q[$i + 1] = $db_wp->query("SELECT * FROM wp_wpsp_ticket WHERE created_by = " . $_POST['id'] . " AND step = " . $i);
				if ( $q[$i + 1]->rowCount() ){
					$arr['row' . ($i + 1)] = $q[($i + 1)]->rowCount();
				} else {
					$arr['row' . ($i + 1)] = 0;
				}
			}		
			echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		}
	}

?>