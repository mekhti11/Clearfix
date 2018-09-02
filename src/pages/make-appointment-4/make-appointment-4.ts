import { AppointmentsPage } from './../appointments/appointments';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-make-appointment-4',
  templateUrl: 'make-appointment-4.html',
})
export class MakeAppointment_4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeAppointment_4Page');
  }

  appointments(){
    this.navCtrl.setRoot(AppointmentsPage);
  }

}
