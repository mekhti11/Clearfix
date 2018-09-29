import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
	selector: 'page-appointments',
	templateUrl: 'appointments.html',
})
export class AppointmentsPage {

	appointments: Object;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public http: Http) {
			this.appointments = [];
			this.postData((json_result) => {
				console.log(json_result);
				this.appointments = json_result;
			});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AppointmentsPage');
	}

	infoAppointment() {
		console.log("Randevu detayları");

	}

	postData(callback) {
		let formData = new FormData();
		formData.append("action", "load");
		formData.append("id", localStorage.getItem("id"));
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/appointments.php", formData).subscribe(function response(res) {
		//this.http.post("http://localhost:8000/php/appointments.php", formData).subscribe(function response(res) {
			let json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}

}
