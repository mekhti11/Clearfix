<?php
	include 'db.php';
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();
	
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );
	
	$arr = array();

	// To prevent direct connections, actions are implemented.
    if(isset($_POST['action'])) {
        if($_POST['action'] == 'load')  {
            if($_POST['category'] == '0') {
				$queries = $db_wp->query("SELECT * FROM wp_wpsp_ticket WHERE created_by = " . $_POST['id']);
			}
			else
			{
				$queries = $db_wp->query("SELECT * FROM wp_wpsp_ticket WHERE created_by = " . $_POST['id'] . " AND step = " . ($_POST['category'] - 1));
			}
			if ( $queries->rowCount() ){
			foreach( $queries as $query ){
				array_push($arr, array(
					'id'       => $query['id'],
					'subject'  => $query['subject'],
					'priority' => $query['priority'],
					'create_time' => $query['create_time'],
					'update_time' => $query['update_time'],
					'step'    	  => $query['step'],
					'cat_id'      => $query['cat_id']
					));
				}
			}
			echo json_encode($arr);
		}
	}
?>