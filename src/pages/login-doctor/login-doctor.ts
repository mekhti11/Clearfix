import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterDoctorPage } from '../register-doctor/register-doctor';

/**
 * Generated class for the LoginDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login-doctor',
  templateUrl: 'login-doctor.html',
})
export class LoginDoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginDoctorPage');
  }

  login(){
    console.log("Bana tıkladın login");
    // doktorun kaydına bakılacak, kaydı var mı yok mu?
    // doktor login olduktan sonra, doktoru işlem sayfasına atmasını gerekiyor
    
    
  }
  register(){
    console.log("Bana tıkladın Register");
    this.navCtrl.setRoot(RegisterDoctorPage);
    
  }

}
