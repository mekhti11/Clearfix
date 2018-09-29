import { HomePage } from '../../pages/home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
	selector: 'page-login-user',
	templateUrl: 'login-user.html',
})
export class LoginUserPage {

	user_data: string;
	pass_data: string;
	warning_user: string;
	warning_pass: string;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public loadingCtrl: LoadingController) {
		this.user_data = "";
		this.pass_data = "";
		this.warning_user = "";
		this.warning_pass = "";
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginUserPage');
	}

	// Callback functions control asynchronous methods.
	postData(callback) {
		// Create credentials.
		var formData = new FormData();
		formData.append("action", "authenticate");
		formData.append("username", this.user_data);
		formData.append("password", this.pass_data);

		var json_result;
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/login-user.php", formData).subscribe(function respond(res) {
			json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

	// LOGIN FUNCTION
	userLogin() {
		// Check if username (telephone number) is empty or not.
		if (!this.user_data) {
			this.warning_user = "Kullanıcı adı boş bırakılamaz.";
		} else this.warning_user = "";
		// Check if password is empty or not.
		if (!this.pass_data) {
			this.warning_pass = "Şifre boş bırakılamaz.";
		} else this.warning_pass = "";
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
					this.warning_user = "Kullanıcı adı veya şifre yanlış.";
					console.log(this.warning_user);
				} else {
					localStorage.setItem('isLoggedIn', 'true');
					localStorage.setItem('name', json_result['name']);
					localStorage.setItem('surname', json_result['surname']);
					localStorage.setItem('username', json_result['username']);
					localStorage.setItem('authority', json_result['user_authority']);
					localStorage.setItem("id", json_result['id']);
					this.navCtrl.setRoot(HomePage); // After the authentication is complete, redirect to the main page.
				}
			});




		}

	}
}
