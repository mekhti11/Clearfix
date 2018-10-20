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
        if($_POST['action'] == 'load')  {
			$queries = $db_mobile->query("SELECT * FROM fotograflar INNER JOIN kayit ON fotograflar.user_id = kayit.id WHERE fotograflar.user_id = " . $_POST['id'] );
			if ( $queries->rowCount() ){
			foreach( $queries as $query ){
				$arr = array(
					'appointment_no'       => $query['id'],
					'appointment_date' 	   => $query['tarih'],
					'appointment_content' => $query['ekleme'],
					);
				}
			}
			echo json_encode($arr);
		}
	}
?>