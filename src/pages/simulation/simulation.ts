import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'; // videoyu çalıştırmak için bu kütüphaneye çağırdım
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
	selector: 'page-simulation',
	templateUrl: 'simulation.html',
})
export class SimulationPage {
	// linki buradan aliyor.
	vid = localStorage.getItem('simulation');

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public domSanitizer: DomSanitizer, public screenOrientation: ScreenOrientation) {
			this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SimulationPage');
	}
	sanitizer(vid) {
		return this.domSanitizer.bypassSecurityTrustResourceUrl(vid);
	}

	ngOnInit() {
		this.changeIcons();
	}

	ionViewWillLeave() {
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
		this.screenOrientation.unlock();
	}


	changeIcons()
	{
	// Example Message 2 - Place all navigation icons at the right side
	var msg = '{"type":"ICONS_RIGHT","value":"1rem"}';
	window.frames[0].postMessage(msg, "*");
	}

}
