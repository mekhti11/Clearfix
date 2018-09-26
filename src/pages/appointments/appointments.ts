import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-appointments',
	templateUrl: 'appointments.html',
})
export class AppointmentsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AppointmentsPage');
	}

	infoAppointment() {
		console.log("Randevu detayları");

	}

}
