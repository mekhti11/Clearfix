import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { ChatWithDoctorPage } from '../chat-with-doctor/chat-with-doctor';
import { SimulationPage } from '../simulation/simulation';
//import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	constructor(public navCtrl: NavController) {

	}
	timer() {
		this.navCtrl.push(TimerPage);
	}
	chatWithDoctor() {
		this.navCtrl.push(ChatWithDoctorPage);

	}
	simulation() {
		this.navCtrl.push(SimulationPage);

	}

}
