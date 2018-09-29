import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ActionSheetController } from 'ionic-angular';
import { CameraProvider } from '../../app/providers/camera.provider';
import { Http } from '@angular/http';
import { MakeAppointment_4Page } from '../make-appointment-4/make-appointment-4';


@Component({
	selector: 'page-make-appointment-3',
	templateUrl: 'make-appointment-3.html',
})
export class MakeAppointment_3Page {
	chosenPicture1: string;
	chosenPicture2: string;
	chosenPicture3: string;
	chosenPicture4: string;
	chosenPicture5: string;

	name: string;
	surname: string;
	gender: string;
	email: string;
	city: string;
	district: string;
	text: string;

	constructor(public navCtrl: NavController, public navParams: NavParams,
		public cameraProvider: CameraProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public actionsheetCtrl: ActionSheetController, 
		public http: Http) {
			this.name = localStorage.getItem("name_register");
			this.surname = localStorage.getItem("surname_register");
			this.gender = localStorage.getItem("gender_register");
			this.email = localStorage.getItem("email_register");
			this.city = localStorage.getItem("city_register");
			this.district = localStorage.getItem("district_register");
			this.text = localStorage.getItem("want_to_add");

			this.chosenPicture1 = localStorage.getItem("ch1");
			this.chosenPicture2 = localStorage.getItem("ch2");
			this.chosenPicture3 = localStorage.getItem("ch3");
			this.chosenPicture4 = localStorage.getItem("ch4");
			this.chosenPicture5 = localStorage.getItem("ch5");

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MakeAppointment_3Page');
	}
	// Şunları da kopyalayıver.
	changePicture1() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Kamera',
					icon: !this.platform.is('ios') ? 'camera' : null,
					handler: () => {
						this.takePicture1();
					}
				},
				{
					text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
					icon: !this.platform.is('ios') ? 'image' : null,
					handler: () => {
						this.getPicture1();
					}
				},
				{
					text: 'Kapat',
					icon: !this.platform.is('ios') ? 'close' : null,
					role: 'destructive',
					handler: () => {
						console.log('the user has cancelled the interaction.');
					}
				}
			]
		});
		return actionsheet.present();
	}

	changePicture2() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Kamera',
					icon: !this.platform.is('ios') ? 'camera' : null,
					handler: () => {
						this.takePicture2();
					}
				},
				{
					text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
					icon: !this.platform.is('ios') ? 'image' : null,
					handler: () => {
						this.getPicture2();
					}
				},
				{
					text: 'Kapat',
					icon: !this.platform.is('ios') ? 'close' : null,
					role: 'destructive',
					handler: () => {
						console.log('the user has cancelled the interaction.');
					}
				}
			]
		});
		return actionsheet.present();
	}

	changePicture3() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Kamera',
					icon: !this.platform.is('ios') ? 'camera' : null,
					handler: () => {
						this.takePicture3();
					}
				},
				{
					text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
					icon: !this.platform.is('ios') ? 'image' : null,
					handler: () => {
						this.getPicture3();
					}
				},
				{
					text: 'Kapat',
					icon: !this.platform.is('ios') ? 'close' : null,
					role: 'destructive',
					handler: () => {
						console.log('the user has cancelled the interaction.');
					}
				}
			]
		});
		return actionsheet.present();
	}

	changePicture4() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Kamera',
					icon: !this.platform.is('ios') ? 'camera' : null,
					handler: () => {
						this.takePicture4();
					}
				},
				{
					text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
					icon: !this.platform.is('ios') ? 'image' : null,
					handler: () => {
						this.getPicture4();
					}
				},
				{
					text: 'Kapat',
					icon: !this.platform.is('ios') ? 'close' : null,
					role: 'destructive',
					handler: () => {
						console.log('the user has cancelled the interaction.');
					}
				}
			]
		});
		return actionsheet.present();
	}

	changePicture5() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Kamera',
					icon: !this.platform.is('ios') ? 'camera' : null,
					handler: () => {
						this.takePicture5();
					}
				},
				{
					text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
					icon: !this.platform.is('ios') ? 'image' : null,
					handler: () => {
						this.getPicture5();
					}
				},
				{
					text: 'Kapat',
					icon: !this.platform.is('ios') ? 'close' : null,
					role: 'destructive',
					handler: () => {
						console.log('the user has cancelled the interaction.');
					}
				}
			]
		});
		return actionsheet.present();
	}

	takePicture1() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromCamera().then(picture => {
			if (picture) {
				this.chosenPicture1 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	takePicture2() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromCamera().then(picture => {
			if (picture) {
				this.chosenPicture2 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	takePicture3() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromCamera().then(picture => {
			if (picture) {
				this.chosenPicture3 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	takePicture4() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromCamera().then(picture => {
			if (picture) {
				this.chosenPicture4 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	takePicture5() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromCamera().then(picture => {
			if (picture) {
				this.chosenPicture5 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	getPicture1() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
			if (picture) {
				this.chosenPicture1 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	getPicture2() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
			if (picture) {
				this.chosenPicture2 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	getPicture3() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
			if (picture) {
				this.chosenPicture3 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	getPicture4() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
			if (picture) {
				this.chosenPicture4 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	getPicture5() {
		const loading = this.loadingCtrl.create();

		loading.present();
		return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
			if (picture) {
				this.chosenPicture5 = picture;
			}
			loading.dismiss();
		}, error => {
			alert(error);
		});
	}

	postData() {
		// Create credentials.
		var formData = new FormData();
		formData.append("action", "register");
		formData.append("name", this.name);
		formData.append("surname", this.surname);
		formData.append("email", this.email);
		formData.append("tel_no", localStorage.getItem("tel_no"));
		formData.append("password", localStorage.getItem("password"));
		formData.append("gender", this.gender);
		formData.append("city", this.city);
		formData.append("district", this.district);
		formData.append("text", this.text);

		formData.append("chosenpicture1", this.chosenPicture1);
		formData.append("chosenpicture2", this.chosenPicture2);
		formData.append("chosenpicture3", this.chosenPicture3);
		formData.append("chosenpicture4", this.chosenPicture4);
		formData.append("chosenpicture5", this.chosenPicture5);

		this.http.post("http://www.clearfix.com.tr/clearfix_new_app/make-appointment.php", formData).subscribe(function respond() {

		});
	}

	create_appointment() {
		this.postData();
		this.navCtrl.setRoot(MakeAppointment_4Page);

	}

}
