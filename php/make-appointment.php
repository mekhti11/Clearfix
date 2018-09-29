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
		if($_POST['action'] == 'register') {
			$user_id = rand();
			$sql  = "INSERT INTO kayit (id, ad, soyad, eposta, tel, sifre, cinsiyet, il, ilce, ekleme, durum, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			$exec = $db_mobile->prepare($sql);
			$exec->execute([$user_id, $_POST['name'], $_POST['surname'], $_POST['email'], $_POST['tel_no'], $_POST['password'], $_POST['gender'], $_POST['city'], $_POST['district'], $_POST['text'], 0, date("Y-m-d H:i:s", strtotime("+3 hours"))]);
			
			$sql  = "INSERT INTO fotograflar (id, user_id, foto1, foto2, foto3, foto4, foto5, tarih) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
			$exec = $db_mobile->prepare($sql);
			$exec->execute([rand(), $user_id, $_POST['chosenpicture1'], $_POST['chosenpicture2'], $_POST['chosenpicture3'], $_POST['chosenpicture4'], $_POST['chosenpicture5'], date("Y-m-d H:i:s", strtotime("+3 hours"))]);
		}
	}


	echo json_encode($arr);
?>