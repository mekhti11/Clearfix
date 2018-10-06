import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {
	language: any = "tr";
	constructor(public navCtrl: NavController,
		public translate: TranslateService) {

	}

	changeLNG() {
		console.log(this.language);
		this.translate.use(this.language);
		localStorage.setItem("language", this.language);
	}
}
