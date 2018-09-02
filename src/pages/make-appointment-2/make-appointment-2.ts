import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MakeAppointment_3Page } from '../make-appointment-3/make-appointment-3';




@Component({
  selector: 'page-make-appointment-2',
  templateUrl: 'make-appointment-2.html',
})
export class MakeAppointment_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeAppointment_2Page');
  }
  nextStep_2(){
    this.navCtrl.setRoot(MakeAppointment_3Page);
  }

}
