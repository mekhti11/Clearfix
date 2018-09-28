import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SuccessActivationPage } from '../success-activation/success-activation';
import { Http } from '@angular/http';


@Component({
	selector: 'page-password',
	templateUrl: 'password.html',
})
export class PasswordPage {

	pword: string;
	confirmation_pword: string;
	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public loadingCtrl: LoadingController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PasswordPage');
	}

	loginUser() {
		// this.postData((json_result) => {
		//
		// });

		localStorage.setItem('password', this.pword);
		console.log(localStorage.getItem('tel_no'));
		console.log(localStorage.getItem('password'));
		this.navCtrl.setRoot(SuccessActivationPage);
	}

	// postData(callback) {
	// 	let formData = new FormData();
	// 	formData.append("action", "send");
	// 	formData.append("password", this.pword);
	// 	this.http.post("http://localhost:8000/php/password.php", formData).subscribe(function(res) {
	// 		let json_result = JSON.parse(res['_body']);
	// 		callback(json_result);
	// 	});
	// }


}
