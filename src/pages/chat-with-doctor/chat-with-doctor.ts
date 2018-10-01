import { Component } from '@angular/core';
import { NavController, NavParams, Refresher, LoadingController } from 'ionic-angular';
import { Http } from "@angular/http";


@Component({
	selector: 'page-chat-with-doctor',
	templateUrl: 'chat-with-doctor.html',
})
export class ChatWithDoctorPage {

	chats: {};
	message: string;
	your_id: string;
	their_id: string;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public loadingCtrl: LoadingController) {
		const loader = this.loadingCtrl.create({
			content: 'Lütfen Bekleyiniz...'
		});
		loader.present();
		this.refreshMessages();
		loader.dismiss();
	}

	refreshMessages() {
		this.loadMessages((json_result) => {
			this.chats = json_result;
			this.message = '';
			this.your_id = localStorage.getItem('id');
			this.their_id = localStorage.getItem('chatval');
			console.log(this.chats);
		});
	}

	sendMessage() {
		if (this.message !== '') {
			const loader = this.loadingCtrl.create({
				content: 'Lütfen Bekleyiniz...'
			});
			loader.present();
			this.postSendMessage(() => {
				this.refreshMessages();
				loader.dismiss();
			});
		}
	}

	postSendMessage(callback) {

		let formData = new FormData();

		formData.append("action", "send");
		formData.append("your_id", localStorage.getItem('id'));
		formData.append("other_id", localStorage.getItem('chatval')); // Bunlar geçici.
		formData.append("content", this.message);

		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/chat-with-doctor.php", formData).subscribe(function response(res) {
			callback();
		});
	}

	loadMessages(callback) {
		let formData = new FormData();

		formData.append("action", "load");
		formData.append("your_id", localStorage.getItem('id'));
		formData.append("other_id", localStorage.getItem('chatval')); // Bunlar geçici.

		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/chat-with-doctor.php", formData).subscribe(function response(res) {
			let json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ChatWithDoctorPage');
	}

}
