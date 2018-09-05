import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-chat-with-doctor',
  templateUrl: 'chat-with-doctor.html',
})
export class ChatWithDoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatWithDoctorPage');
  }

}
