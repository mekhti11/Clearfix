import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { IdListPage } from '../id-list/id-list';
import { Http } from "@angular/http";

@Component({
	selector: 'page-category',
	templateUrl: 'category.html',
})
export class CategoryPage {

	rows: Array<number>;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public http: Http) {
		this.rows = [];
		const loader = this.loadingCtrl.create({
			content: 'Lütfen Bekleyiniz...'
		});
		loader.present();
		this.postData((json_result) => {
			loader.dismiss();
			for (var i = 0; i < 10; i++)
				this.rows[i] = json_result['row' + i];
		});
	}

	postData(callback) {

		var formData = new FormData();
		formData.append("action", "load");
		formData.append("id", localStorage.getItem("id"));

		this.http.post("http://localhost:8000/php/category.php", formData).subscribe(function response(res) {
			var json_result = JSON.parse(res['_body']);
			console.log(json_result);
			callback(json_result);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CategoryPage');
	}
	userList(val) {
		localStorage.setItem("category", val);
		this.navCtrl.push(IdListPage);
	}

}
