import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { ChatWithDoctorPage } from '../chat-with-doctor/chat-with-doctor';
import { SimulationPage } from '../simulation/simulation';
import { Http } from '@angular/http';
import { ToastController } from "ionic-angular";
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	authority: string;
	isLoggedIn: string;

	constructor(public navCtrl: NavController, public http: Http,
		public toastCtrl: ToastController, public translate: TranslateService) {
		this.authority = localStorage.getItem("user_authority");
		
		this.isLoggedIn = localStorage.getItem("isLoggedIn");
	}
	timer() {
		this.navCtrl.push(TimerPage);
	}
	
	ionViewDidEnter() {
		this.authority = localStorage.getItem("user_authority");
		this.isLoggedIn = localStorage.getItem("isLoggedIn");
	}

	translateContent(callback) {
		let translatedContent;
		this.translate.get("AboutPage.HASTA_ULASILAMADI").subscribe(value => {
			translatedContent = value;
			console.log(translatedContent);
			callback(translatedContent);
		})
	}

	chatWithDoctor() {
		this.translateContent((translatedContent) => {
			this.postData((json_result) => {
				if(json_result['message'] == 'success') {
					localStorage.setItem("chatval", json_result['id']);	
					this.navCtrl.setRoot(ChatWithDoctorPage);	
				}
				else
				{
					let toast = this.toastCtrl.create({
						message: translatedContent,
						duration: 3000,
						position: 'bottom'
					});
					toast.present();
				}
			});
		});
	}
	simulation() {
		this.navCtrl.push(SimulationPage);

	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "detect");
		formData.append("name", localStorage.getItem("name"));
		formData.append("surname", localStorage.getItem("surname"));
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/about.php", formData)
		.subscribe(function response(res) {
			let json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

}
