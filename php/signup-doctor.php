<?php
    include 'db.php';
    include 'class-phpass.php';

    ini_set('session.cache_limiter','public');
    session_cache_limiter(false);
    session_start();

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json, charset: utf-8');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers , Content-Type , Access-Control-Allow-Methods , Authorization , X-Requested-With');

    $ph = new PasswordHash( 8, true );

    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'signup') {
            $uname = htmlspecialchars($_POST['uname']);
			$pass_secure = htmlspecialchars($_POST['pword']);
            $email = htmlspecialchars($_POST['email']);
			$name = htmlspecialchars($_POST['name']);
			$pword = $ph->HashPassword($pass_secure);

            $query ="INSERT INTO `wp_users`(`user_login`, `user_pass`, `user_nicename`, `user_email`, `display_name`) VALUES (?,?,?,?,?)";

            $stmnt = $db_wp->prepare($query);
            $stmnt->bindParam(1,$uname);
            $stmnt->bindParam(2,$pword);
            $stmnt->bindParam(3,$uname);
            $stmnt->bindParam(4,$email);
            $stmnt->bindParam(5,$name);

            if($stmnt->execute()){
                echo json_encode(array(
                    'msg' => 'succes',
                    'uname' => $uname ,
                    'name' => $name
                    )
                );
            }else{
                echo json_encode(array(
                    'msg' => 'error'
                    )
                );
            }
        }
    }



 ?>
