import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SmsOtpPage } from '../sms-otp/sms-otp';
import { Http } from "@angular/http";




@Component({
	selector: 'page-new-account',
	templateUrl: 'new-account.html',
})
export class NewAccountPage {

	telephone: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NewAccountPage');
	}
	closePage() {
		this.navCtrl.setRoot(HomePage)
	}
	// one time password
	sendSmsOTP() {
		this.postData((json_result) => {
			localStorage.setItem("activation", json_result['activation']);
			localStorage.setItem("tel_no", this.telephone);
			console.log(localStorage.getItem('tel_no'));
			console.log(json_result['activation']);
		});
		this.navCtrl.setRoot(SmsOtpPage);
	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "send");
		formData.append("telephone", this.telephone);
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/new-account.php", formData).subscribe(function(res) {
			let json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}
}
