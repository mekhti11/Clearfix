import { PasswordPage } from './../password/password';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from "@angular/http";
import { AlertController } from "ionic-angular";

@Component({
	selector: 'page-sms-otp',
	templateUrl: 'sms-otp.html',
})
export class SmsOtpPage {

	activation_user: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl:AlertController) {
		this.activation_user = "";
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SmsOtpPage');
	}
	closePage() {
		this.navCtrl.setRoot(HomePage)
	}
	completeAppointment() {
		let activation = localStorage.getItem("activation");
		if(this.activation_user == activation) {
			localStorage.setItem("activation", "");
			this.navCtrl.setRoot(PasswordPage);
		} else {
		const alert = this.alertCtrl.create({
			title: 'Şifre',
			subTitle: 'Aktivasyon kodunuzu yanlış girdiniz!',
			buttons: ['OK']
		});
		alert.present();
		this.activation_user = "";
		}
	}
	repeatTheSmsOTP() {
		
		this.postData((json_result) => {
			const alert = this.alertCtrl.create({
				title: 'Şifre',
				subTitle: 'Aktivasyon kodunuz yeniden gönderildi!',
				buttons: ['OK']
			});
			alert.present();
			localStorage.setItem("activation", json_result['activation']);
			console.log(json_result['activation']);
		});
		this.navCtrl.setRoot(SmsOtpPage);
	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "send");
		formData.append("telephone", localStorage.getItem("tel_no"));
		this.http.post("http://localhost:8000/php/new-account.php", formData).subscribe(function(res) {
			let json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}

}
