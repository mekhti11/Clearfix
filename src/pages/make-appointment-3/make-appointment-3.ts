import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ActionSheetController } from 'ionic-angular';
import { CameraProvider } from '../../app/providers/camera.provider';

import { MakeAppointment_4Page } from '../make-appointment-4/make-appointment-4';


@Component({
  selector: 'page-make-appointment-3',
  templateUrl: 'make-appointment-3.html',
})
export class MakeAppointment_3Page {
  chosenPicture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public cameraProvider: CameraProvider,
              public loadingCtrl: LoadingController,
              public platform: Platform,
              public actionsheetCtrl: ActionSheetController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeAppointment_3Page');
  }
  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: 'Fotoğraf Yükle',
      buttons: [
        {
          text: 'Kamera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
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

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  create_appointment(){
    this.navCtrl.setRoot(MakeAppointment_4Page);
    
  }

}
