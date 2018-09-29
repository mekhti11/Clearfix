import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'; // videoyu çalıştırmak için bu kütüphaneye çağırdım


@Component({
	selector: 'page-simulation',
	templateUrl: 'simulation.html',
})
export class SimulationPage {
	// linki buradan aliyor.
	vid = 'http://real-dental.com/3df2i/index.html?mlink=http://real-dental.com/3df2i/Client1651/28248032/1A5F749D74534FB285C394E17F2967FF.iiwgl&fg=000&bg=eee&p=UCHGCM';

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public domSanitizer: DomSanitizer) {
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


	changeIcons()
	{
	// Example Message 2 - Place all navigation icons at the right side
	var msg = '{"type":"ICONS_RIGHT","value":"1rem"}';
	window.frames[0].postMessage(msg, "*");
	}

}
