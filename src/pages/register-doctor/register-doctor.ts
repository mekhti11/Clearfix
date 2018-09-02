import { TicketListPage } from './../ticket-list/ticket-list';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginDoctorPage } from '../login-doctor/login-doctor';


@Component({
  selector: 'page-register-doctor',
  templateUrl: 'register-doctor.html',
})
export class RegisterDoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDoctorPage');
  }
  register(){
    this.navCtrl.setRoot(TicketListPage);

  }

  login(){
    console.log("tıkladı");
    
    this.navCtrl.setRoot(LoginDoctorPage);
  }


}
