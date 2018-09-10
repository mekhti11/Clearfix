import { HomePage } from '../../pages/home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-login-user',
  templateUrl: 'login-user.html',
})
export class LoginUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUserPage');
  }
  userLogin(){
    this.navCtrl.setRoot(HomePage); // Deneme amaciyla anasayfaya atıyorum.
  }

}
