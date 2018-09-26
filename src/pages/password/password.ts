import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuccessActivationPage } from '../success-activation/success-activation';


@Component({
	selector: 'page-password',
	templateUrl: 'password.html',
})
export class PasswordPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PasswordPage');
	}
	loginUser() {
		this.navCtrl.push(SuccessActivationPage);
	}

}
