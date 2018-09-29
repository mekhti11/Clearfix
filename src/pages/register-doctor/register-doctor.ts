import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginDoctorPage } from '../login-doctor/login-doctor';
import { HomePage } from '../home/home';


@Component({
	selector: 'page-register-doctor',
	templateUrl: 'register-doctor.html',
})
export class RegisterDoctorPage {
	name: string;
	uname: string;
	email: string;
	pword: string;
	confirmation_pword: string;


	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public http: Http) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterDoctorPage');
	}

	// Callback functions control asynchronous methods.
	postData(callback) {

		var formData = new FormData();
		formData.append("action", "signup");
		formData.append("uname", this.uname);
		formData.append("pword", this.pword);
		formData.append("email", this.email);
		formData.append("name", this.name);

		var json_result;
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/signup-doctor.php", formData).subscribe(function respond(res) {
			json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

	register() {
		console.log('Bana tikladin register');
		const loader = this.loadingCtrl.create({
			content: 'Lütfen Bekleyiniz...'
		});
		loader.present();
		this.postData((json_result) => {
			loader.dismiss();
			// Check if database query is valid or not.
			if (json_result['message'] == 'Error') {
				const alert = this.alertCtrl.create({
					title: 'HATA!',
					subTitle: 'Bir şeyler yanlış gitti. Lütfen yeniden deneyiniz!',
					buttons: ['OK']
				});
				alert.present();
				this.name = "";
				this.uname = "";
				this.email = "";
				this.pword = "";
				this.confirmation_pword = "";
			} else {
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('name', json_result['name']);
				// localStorage.setItem('surname', json_result['surname']);
				localStorage.setItem('username', json_result['uname']);
				localStorage.setItem('authority', '1');
				// localStorage.setItem("id", json_result['id']);
				this.navCtrl.setRoot(HomePage); // After the authentication is complete, redirect to the main page.
			}
		});
	}

	login() {
		console.log("tıkladı");

		this.navCtrl.setRoot(LoginDoctorPage);
	}


}
