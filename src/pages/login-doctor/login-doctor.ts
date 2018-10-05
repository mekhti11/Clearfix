import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterDoctorPage } from '../register-doctor/register-doctor';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';




@Component({
	selector: 'page-login-doctor',
	templateUrl: 'login-doctor.html',
})
export class LoginDoctorPage {

	user_data: string;
	warning_user: string;
	pass_data: string;
	warning_pass: string;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public loadingCtrl: LoadingController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginDoctorPage');
	}

	// Callback functions control asynchronous methods.
	postData(callback) {
		// Create credentials.
		var formData = new FormData();
		formData.append("action", "authenticate");
		formData.append("username", this.user_data);
		formData.append("password", this.pass_data);

		var json_result;
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/login-doctor.php", formData).subscribe(function respond(res) {
			json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

	login() {
		console.log("Bana tıkladın login");
		// LOGIN FUNCTION

		// Check if username (telephone number) is empty or not.
		if (!this.user_data) {
			this.warning_user = "Kullanıcı adı boş bırakılamaz.";
		} else
			this.warning_user = "";

		// Check if password is empty or not.
		if (!this.pass_data) {
			this.warning_pass = "Şifre boş bırakılamaz.";
		} else
			this.warning_pass = "";
		// Check whether all credentials are valid or not.
		if (this.user_data && this.pass_data) {
			const loader = this.loadingCtrl.create({
				content: 'Lütfen Bekleyiniz...'
			});
			loader.present();
			this.postData((json_result) => {
				loader.dismiss();
				// Check if database query is valid or not.
				if (json_result['message'] == 'error') {
					this.warning_user = "Email veya şifre yanlış.";
					console.log(this.warning_user);
				} else {
					localStorage.setItem('isLoggedIn', 'true');
					localStorage.setItem('name', json_result['name']);
					localStorage.setItem('surname', json_result['surname']);
					localStorage.setItem('username', json_result['username']);
					localStorage.setItem('user_authority', '1');
					localStorage.setItem("id", json_result['id']);
					this.navCtrl.setRoot(HomePage); // After the authentication is complete, redirect to the main page.
				}
			});

		}
	}
	register() {
		console.log("Bana tıkladın Register");
		this.navCtrl.setRoot(RegisterDoctorPage);
	}

}
