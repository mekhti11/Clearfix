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
	text: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	}

	ionViewDidLoad() {
		console.log('randevu al sayfsındayım');
	}
	nextStep_1() {
		localStorage.setItem("name_register", this.name);
		localStorage.setItem("surname_register", this.surname);
		localStorage.setItem("email_register", this.email);
		localStorage.setItem("gender_register", this.gender);
		localStorage.setItem("city_register", this.city);
		localStorage.setItem("district_register", this.district);
		localStorage.setItem("want_to_add", this.text);
		this.navCtrl.setRoot(MakeAppointment_2Page);
	}
}
