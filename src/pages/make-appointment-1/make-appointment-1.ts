import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeAppointment_2Page } from '../make-appointment-2/make-appointment-2';


@Component({
  selector: 'page-make-appointment-1',
  templateUrl: 'make-appointment-1.html',
})
export class MakeAppointment_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('randevu al sayfsındayım');
  }
  nextStep_1(){
    this.navCtrl.setRoot(MakeAppointment_2Page);
  }

}
