import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-ticket-list',
	templateUrl: 'ticket-list.html',
})
export class TicketListPage {

	ticket: Object;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.ticket = JSON.parse(localStorage.getItem("ticketJSON"));
		switch (this.ticket['step']) {
			case '0': this.ticket['step'] = 'Ölçüler'; break;
			case '1': this.ticket['step'] = 'Tarama'; break;
			case '2': this.ticket['step'] = 'Kayıt'; break;
			case '3': this.ticket['step'] = 'Set-Up'; break;
			case '4': this.ticket['step'] = 'Planlama'; break;
			case '5': this.ticket['step'] = 'Export'; break;
			case '6': this.ticket['step'] = 'P. Ç. T.'; break;
			case '7': this.ticket['step'] = 'Kargoda'; break;
			case '8': this.ticket['step'] = 'Tamamlandı'; break;
		}
		switch (this.ticket['cat_id']) {
			case '1': this.ticket['cat_id'] = 'robofix/lingual'; break;
			case '2': this.ticket['cat_id'] = 'clearfix'; break;
			case '6': this.ticket['cat_id'] = 'robofix/labial'; break;
			case '7': this.ticket['cat_id'] = 'transfer-fix'; break;
			case '8': this.ticket['cat_id'] = 'formule22'; break;
			case '9': this.ticket['cat_id'] = 'Tamamlandı'; break;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TicketListPage');
	}

}
