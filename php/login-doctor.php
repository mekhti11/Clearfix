<?php

	include 'db.php';
	include 'class-phpass.php';
	
	ini_set('session.cache_limiter','public');
	session_cache_limiter(false);
	session_start();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );
	
	$ph = new PasswordHash( 8, true );

    if(isset($_POST['action'])) {
        if($_POST['action'] == 'authenticate')  {
			
			// HTMLSPECIALCHARS prevents SQL injection.
			$user_secure = htmlspecialchars($_POST['username']);
			$pass_secure = htmlspecialchars($_POST['password']);
			$pass_enc = $ph->HashPassword($pass_secure);
			
			
			$queries = $db_wp->query("SELECT * FROM wp_users WHERE " . "user_email = '" . $user_secure . "'");
			
		if ( $queries->rowCount() ){
			foreach( $queries as $query ){
				// Sessions are global variables and works everywhere, stored in cookies for each Firefox/Chrome login.
				// But sessions are deprecated, leaving the job to the local storage.
				$pass_check = $ph->CheckPassword($pass_secure, $query['user_pass']);
				if($pass_check) 
					$arr = array('message' => 'success', 'name' => $query['display_name'], 'surname' => '', 'user_authority' => 1, 'username' => $user_secure, 'id' => $query['ID']);
				else
					$arr = array('message' => 'error');
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