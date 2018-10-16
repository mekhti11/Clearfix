import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { CameraProvider } from '../../app/providers/camera.provider';
import { Http } from '@angular/http';
import { TimerPage } from '../timer/timer';


@IonicPage()
@Component({
  selector: 'page-add-photos',
  templateUrl: 'add-photos.html',
})
export class AddPhotosPage {

  chosenPicture1: string;
	chosenPicture2: string;
	chosenPicture3: string;
	chosenPicture4: string;
	chosenPicture5: string;

  constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public cameraProvider: CameraProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPhotosPage');
  }

  changePicture1() {

		const actionsheet = this.actionsheetCtrl.create({
			title: 'Fotoğraf Yükle',
			buttons: [
				{
					text: 'Camera',
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
					text: 'Cancel',
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
					text: 'Camera',
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
					text: 'Cancel',
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
					text: 'Camera',
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
					text: 'Cancel',
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
					text: 'Camera',
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
					text: 'Cancel',
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
					text: 'Camera',
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
					text: 'Cancel',
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
  
  send(){
    var formData = new FormData();
		formData.append("action", "send");
		formData.append("uid", localStorage.getItem("id"));
		formData.append("chosenpicture1", this.chosenPicture1);
		formData.append("chosenpicture2", this.chosenPicture2);
		formData.append("chosenpicture3", this.chosenPicture3);
		formData.append("chosenpicture4", this.chosenPicture4);
    formData.append("chosenpicture5", this.chosenPicture5);
    this.http.post("http://www.clearfix.com.tr/clearfix_new_app/addPhotos.php", formData).subscribe(function respond() {
      console.log("photos sent");
      
    });
    this.navCtrl.setRoot(TimerPage);
  }

}
