import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeAppointment_4Page } from '../make-appointment-4/make-appointment-4';


@Component({
  selector: 'page-make-appointment-3',
  templateUrl: 'make-appointment-3.html',
})
export class MakeAppointment_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeAppointment_3Page');
  }

  create_appointment(){
    this.navCtrl.setRoot(MakeAppointment_4Page);
    
  }

}
