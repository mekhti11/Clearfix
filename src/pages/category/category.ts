import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdListPage } from '../id-list/id-list';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  userList(){
    this.navCtrl.push(IdListPage);
  }

}
