import { PasswordPage } from './../password/password';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from "@angular/http";
import { AlertController } from "ionic-angular";
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'page-sms-otp',
	templateUrl: 'sms-otp.html',
})
export class SmsOtpPage {

	activation_user: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public http: Http, public alertCtrl:AlertController) {
		this.activation_user = "";
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SmsOtpPage');
	}
	closePage() {
		this.navCtrl.setRoot(HomePage)
	}

	translateContentPassword(callback) {
		let translatedContent;
		this.translate.get("SMS_OTP_Page.PASSWORD").subscribe(value => {
			translatedContent = value;
			
			callback(translatedContent);
		})
	}

	translateContentNotActivated(callback) {
		let translatedContent;
		this.translate.get("SMS_OTP_Page.ACTIVATION_MESSAGE1").subscribe(value => {
			translatedContent = value;
			
			callback(translatedContent);
		})
	}

	translateContentResent(callback) {
		let translatedContent;
		this.translate.get("SMS_OTP_Page.ACTIVATION_MESSAGE2").subscribe(value => {
			translatedContent = value;
			
			callback(translatedContent);
		})
	}

	completeAppointment() {
		this.translateContentNotActivated((translatedContent) => {
			let activation = localStorage.getItem("activation");
			if(this.activation_user == activation) {
				localStorage.setItem("activation", "");
				this.navCtrl.setRoot(PasswordPage);
			} else {
			this.translateContentPassword((translatedContent2) => {
			const alert = this.alertCtrl.create({
				title: translatedContent2,
				subTitle: translatedContent,
				buttons: ['OK']
			});
			alert.present();
		});
			this.activation_user = "";
			}
		});
	
	}
	repeatTheSmsOTP() {
		this.translateContentNotActivated((translatedContent) => {
			this.postData((json_result) => {
				this.translateContentPassword((translatedContent2) => {
					const alert = this.alertCtrl.create({
						title: translatedContent2,
						subTitle: translatedContent,
						buttons: ['OK']
					});
					alert.present();
				});
				localStorage.setItem("activation", json_result['activation']);
				
			});
			this.navCtrl.setRoot(SmsOtpPage);
		});
	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "send");
		formData.append("telephone", localStorage.getItem("tel_no"));
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/new-account.php", formData).subscribe(function(res) {
			let json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}

}
