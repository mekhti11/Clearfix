<?php // send sms
  /*
   * Bulutfon Api
   * SMS Gönderme*/
   
   if(isset($_POST['action'])) {
	   if($_POST['action'] == 'send') {
		  $token = "3ba5d8f3c7ba67ebc732f962d96ca706e7fd61f9f2f5c0fb0f0c19f959027fed"; // Bulutfon panelinden alcağınız master token
		  $title = "Clearfix"; // Bulutfon üzerinden onaylattığınız sms başlığı

		  $rand = (rand() % 8999) + 1000;
		  
		  $prefix = "+90";
		  $receivers = $prefix . $_POST['telephone']; // Formdan gelen alıcı listesi
		  $message   = "Aktivasyon şifreniz: " . $rand; // Formdan gelen mesaj alanı


		  $ch = curl_init(); // Curl oturumunu başlattık
		  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		  curl_setopt($ch, CURLOPT_URL, 'https://api.bulutfon.com/messages'); // SMS gönderimi için kullanacağımız api adresi
		  curl_setopt($ch, CURLOPT_POST, 1); // Burada curl post kullanacagımızı belirttik 1 yerine  true de denebilir
		  curl_setopt($ch, CURLOPT_POSTFIELDS, 'title=' . $title . '&access_token=' . $token . '&receivers=' . $receivers . '&content=' . $message); //  Burada ise göndereceğimiz parametreleri belirtiyoruz.
		  curl_exec($ch); // Curl calıştır.
		  curl_close($ch); // Curl oturumunu kapat
		  
		  $arr = array("activation" => $rand);
		  echo json_encode($arr);
	   }
   }

      
// /send sms
?>