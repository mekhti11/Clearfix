import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TicketListPage } from '../ticket-list/ticket-list';
import { Http } from "@angular/http";


@Component({
	selector: 'page-id-list',
	templateUrl: 'id-list.html',
})
export class IdListPage {

	tickets: Object;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public loadingCtrl: LoadingController) {
		const loader = this.loadingCtrl.create({
			content: 'Lütfen Bekleyiniz...'
		});
		loader.present();
		this.postData((json_result) => {
			loader.dismiss();
			this.tickets = json_result;
		});
	}

	postData(callback) {
		var formData = new FormData();
		formData.append("action", "load");
		formData.append("category", localStorage.getItem("category"));
		formData.append("id", localStorage.getItem("id"));
		this.http.post("http://localhost:8000/php/id-list.php", formData).subscribe(function response(res) {
			var json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad IdListPage');
	}
	ticket_send(ticket) {
		localStorage.setItem("ticketJSON", JSON.stringify(ticket));
		this.navCtrl.push(TicketListPage);
	}

	/** Şu an bu kısım çalışmıyor.
	getItems(searchbar) {
	  var q = searchbar.srcElement.value;
	  if(!q) return;
	  for(var ticket in this.tickets) {
		if(ticket['subject'].toLowerCase().indexOf(q.toLowerCase() > -1)) {
		  return true;
		}
		return false;
	  }

	  }*/
}
