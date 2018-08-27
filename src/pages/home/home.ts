import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { LoginUserPage } from '../login-user/login-user';
import { LoginDoctorPage } from '../login-doctor/login-doctor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  newAccount(){
    this.navCtrl.setRoot(NewAccountPage);
  }
  loginUser(){
    this.navCtrl.setRoot(LoginUserPage)
  }
  loginDoctor(){
    this.navCtrl.setRoot(LoginDoctorPage)
  }

}
