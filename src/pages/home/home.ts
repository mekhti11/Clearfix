import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { NewAccountPage } from '../new-account/new-account';
import { LoginUserPage } from '../login-user/login-user';
import { LoginDoctorPage } from '../login-doctor/login-doctor';
import { Http } from '@angular/http';
import { CategoryPage } from '../category/category';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	account: boolean;
	name: string;
	surname: string;
	authority: string;

	constructor(public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public http: Http) {
		// Define the undefined values.
		if (!localStorage.getItem('isLoggedIn'))
			localStorage.setItem('isLoggedIn', 'false');
		if (!localStorage.getItem('name'))
			localStorage.setItem('name', '');
		if (!localStorage.getItem('surname'))
			localStorage.setItem('surname', '');
		if (!localStorage.getItem('user_authority'))
			localStorage.setItem('user_authority', '');
		if (!localStorage.getItem('username'))
			localStorage.setItem('username', '');
		if (!localStorage.getItem('id'))
			localStorage.setItem('id', '');
		this.accountCheck();
		console.log(localStorage.getItem('name'));
		console.log(localStorage.getItem('surname'));
		console.log(localStorage.getItem('username'));
		console.log(localStorage.getItem('id'));
	}

	goToCategories() {
		this.navCtrl.setRoot(CategoryPage);
	}

	newAccount() {
		this.navCtrl.setRoot(NewAccountPage);
	}
	loginUser() {
		this.navCtrl.setRoot(LoginUserPage)
	}
	logoutUser() {
		this.postData(() => {
			this.account = false;
			localStorage.setItem('isLoggedIn', 'false');
			localStorage.setItem('name', '');
			localStorage.setItem('username', '');
			localStorage.setItem('authority', '');
			localStorage.setItem('surname', '');
			localStorage.setItem('id', '');
			this.navCtrl.setRoot(HomePage);
		}, "logout");
	}

	loginDoctor() {
		this.navCtrl.setRoot(LoginDoctorPage)
	}

	accountCheck() {
		const loader = this.loadingCtrl.create({
			content: 'Lütfen Bekleyiniz...'
		});
		loader.present();
		this.postData((json_result) => {
			loader.dismiss()
			if (json_result['message'] == 'not_logged_in') {
				this.account = false;
			}
			else {
				this.account = true;
				this.name = localStorage.getItem("name");
				this.surname = localStorage.getItem("surname");
				this.authority = localStorage.getItem("authority");
			}
			console.log(json_result);
		}, "check");
	}

	postData(callback, action) {
		// Create credentials.
		var json_result;
		var formData = new FormData();
		formData.append("action", action);
		formData.append("loginInfo", localStorage.getItem('isLoggedIn'));
		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/home.php", formData).subscribe(function respond(res) {
			json_result = JSON.parse(res['_body']);
			callback(json_result);
		});
	}
}
