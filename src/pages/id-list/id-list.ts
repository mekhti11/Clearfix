import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketListPage } from '../ticket-list/ticket-list';


@Component({
  selector: 'page-id-list',
  templateUrl: 'id-list.html',
})
export class IdListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdListPage');
  }
  ticket(){
    this.navCtrl.push(TicketListPage);
  }
  getItems(searchbar) {
  }

}
