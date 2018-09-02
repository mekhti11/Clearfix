import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SuccessActivationPage } from '../success-activation/success-activation';

@Component({
  selector: 'page-sms-otp',
  templateUrl: 'sms-otp.html',
})
export class SmsOtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsOtpPage');
  }
  closePage(){
    this.navCtrl.setRoot(HomePage)
  }
  completeAppointment(){
    this.navCtrl.setRoot(SuccessActivationPage);
  }
  repeatTheSmsOPT(){

  }

}
