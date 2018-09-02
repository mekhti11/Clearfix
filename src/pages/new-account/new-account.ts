import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SmsOtpPage } from '../sms-otp/sms-otp';

/**
 * Generated class for the NewAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-account',
  templateUrl: 'new-account.html',
})
export class NewAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAccountPage');
  }
  closePage(){
    this.navCtrl.setRoot(HomePage)
  }
  // one time password
  sendSmsOPT(){ 
    this.navCtrl.setRoot(SmsOtpPage);
  }

}
