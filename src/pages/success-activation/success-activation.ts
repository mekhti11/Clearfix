import { MakeAppointment_1Page } from './../make-appointment-1/make-appointment-1';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-success-activation',
  templateUrl: 'success-activation.html',
})
export class SuccessActivationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessActivationPage');
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }
  
  makeappointment(){
    this.navCtrl.setRoot(MakeAppointment_1Page);
  }

}
