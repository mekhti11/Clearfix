import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeAppointment_2Page } from '../make-appointment-2/make-appointment-2';
import { Http } from '@angular/http';


@Component({
	selector: 'page-make-appointment-1',
	templateUrl: 'make-appointment-1.html',
})
export class MakeAppointment_1Page {

	name: string;
	surname: string;
	email: string;
	gender: string;
	city: string;
	district: string;


	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	}

	ionViewDidLoad() {
		console.log('randevu al sayfsındayım');
	}
	nextStep_1() {
		this.navCtrl.setRoot(MakeAppointment_2Page);
	}

	postData(callback) {
		// Create credentials.
		var json_result;
		var formData = new FormData();
		formData.append("action", "getinfo");
		formData.append("name", this.name);
		formData.append("surname", this.surname);
		formData.append("email", this.email);
		formData.append("gender", this.gender);
		formData.append("city", this.city);
		formData.append("district", this.district);
		this.http.post("http://localhost:8000/php/home.php", formData).subscribe(function respond(res) {
			json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}
}
