import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatWithDoctorPage } from '../chat-with-doctor/chat-with-doctor';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { SimulationPage } from '../simulation/simulation';

@Component({
	selector: 'page-ticket-list',
	templateUrl: 'ticket-list.html',
})
export class TicketListPage {

	ticket: Object;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, 
		public toastCtrl: ToastController) {
		this.ticket = JSON.parse(localStorage.getItem("ticketJSON"));
		switch (this.ticket['step']) {
			case '0': this.ticket['step'] = 'Ölçüler'; break;
			case '1': this.ticket['step'] = 'Tarama'; break;
			case '2': this.ticket['step'] = 'Kayıt'; break;
			case '3': this.ticket['step'] = 'Set-Up'; break;
			case '4': this.ticket['step'] = 'Planlama'; break;
			case '5': this.ticket['step'] = 'Export'; break;
			case '6': this.ticket['step'] = 'P. Ç. T.'; break;
			case '7': this.ticket['step'] = 'Kargoda'; break;
			case '8': this.ticket['step'] = 'Tamamlandı'; break;
		}
		switch (this.ticket['cat_id']) {
			case '1': this.ticket['cat_id'] = 'robofix/lingual'; break;
			case '2': this.ticket['cat_id'] = 'clearfix'; break;
			case '6': this.ticket['cat_id'] = 'robofix/labial'; break;
			case '7': this.ticket['cat_id'] = 'transfer-fix'; break;
			case '8': this.ticket['cat_id'] = 'formule22'; break;
			case '9': this.ticket['cat_id'] = 'Tamamlandı'; break;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TicketListPage');
	}
	
	goToChat() {
		this.postData((json_result) => {
			if(json_result['message'] == 'success') {
				localStorage.setItem("chatval", json_result['id']);	
				this.navCtrl.setRoot(ChatWithDoctorPage);	
			}
			else
			{
				let toast = this.toastCtrl.create({
					message: 'Sohbete ulaşılamadı. Bu hasta veritabanında kayıtlı değil.',
					duration: 3000,
					position: 'bottom'
				  });
				toast.present();
			}
 		});
		
		
	}

	goToSimulation() {
		this.postDataSimulation((json_result) => {
			if(json_result['message'] == 'success') {
				localStorage.setItem("simulation", json_result['url']);	
				this.navCtrl.setRoot(SimulationPage);	
			}
			else
			{
				let toast = this.toastCtrl.create({
					message: 'Simülasyona ulaşılamadı. Bu hasta için simülasyon yok.',
					duration: 3000,
					position: 'bottom'
				  });
				toast.present();
			}
 		});
		
		
	}

	postDataSimulation(callback) {
		let formData = new FormData();
		formData.append("action", "simulate");
		formData.append("id", this.ticket['id']);
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/ticket-list.php", formData).subscribe(function response(res) {
			let json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "detect");
		formData.append("subject", this.ticket['subject']);
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/ticket-list.php", formData).subscribe(function response(res) {
			let json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

}
