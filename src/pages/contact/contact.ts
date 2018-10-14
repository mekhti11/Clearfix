import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {
	language: any;
	constructor(public navCtrl: NavController,
		public translate: TranslateService) {
			this.language = this.translate.currentLang;
	}

	changeLNG() {
		console.log(this.language);
		this.translate.use(this.language);
		localStorage.setItem("language", this.language);
	}
}
