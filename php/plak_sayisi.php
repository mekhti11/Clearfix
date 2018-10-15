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
                    $plak_sayisi = $query['plak_sayisi'];
					$arr = array('plak_sayisi' => $plak_sayisi, 'message' => 'success');
				}
			}
			else 
			{
				$arr = array('message' => 'not_found');
			}
			echo json_encode($arr);
		}
		if($_POST['action'] == 'send') {
			$sql  = "UPDATE kronometre SET plak_sayisi = " .$_POST['plak_sayisi'] . " WHERE patient_id = " .$_POST['id'];
			$exec = $db_mobile->prepare($sql);
			$exec->execute();
			$arr = array('message' => 'not_found','plak_sayisi'=>$_POST['plak_sayisi'],'sql'=>$sql);
			echo json_encode($arr);

		}
	}
?>