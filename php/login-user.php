<?php

	include 'db.php';
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );

    if(isset($_POST['action'])) {
        if($_POST['action'] == 'authenticate')  {
			
			// HTMLSPECIALCHARS prevents SQL injection.
			$user_secure = htmlspecialchars($_POST['username']);
			$pass_secure = htmlspecialchars($_POST['password']);
			
			$queries =$db_mobile->query("SELECT * FROM kayit WHERE sifre = '" . $pass_secure . "' AND " . "tel = '" . $user_secure . "'");
			
		if ( $queries->rowCount() ){
			foreach( $queries as $query ){
				// Sessions are global variables and works everywhere, stored in cookies for each Firefox/Chrome login.
				// But sessions are deprecated, leaving the job to the local storage.
				$arr = array('message' => 'success', 'name' => $query['ad'], 'surname' => $query['soyad'], 'user_authority' => 0, 'username' => $user_secure, 'id' => $query['id']);
			}
		}  
		else 
		{
			$arr = array('message' => 'error');
		}
		
		echo json_encode($arr, JSON_UNESCAPED_UNICODE);
		}
	}
?>