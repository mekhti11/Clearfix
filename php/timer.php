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
			$queries = $db_mobile->query("SELECT * FROM kronometre WHERE patient_id = " .$_POST['id']);
			if ( $queries->rowCount() ){
				foreach( $queries as $query )
				{
					$d1 = strtotime($query['timer_end']);
					$d2 = strtotime(date("Y-m-d H:i:s", strtotime("+3 hours")));
					$diff = $d1 - $d2;
					$arr = array('message' => 'found', 'time' => $diff);
				}
			}
			else 
			{
				$arr = array('message' => 'not_found');
			}
			echo json_encode($arr);
		}
		if($_POST['action'] == 'send') {
			$sql  = "INSERT INTO kronometre (timer_id, patient_id, timer_end) VALUES (?, ?, ?)";
			$exec = $db_mobile->prepare($sql);
			$exec->execute([rand(), $_POST['id'], date("Y-m-d H:i:s", strtotime(($_POST['time'] + 10800). " seconds"))]);
		}
	}
?>