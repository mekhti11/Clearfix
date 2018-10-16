import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPhotosPage } from './add-photos';

@NgModule({
  declarations: [
    AddPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPhotosPage),
  ],
})
export class AddPhotosPageModule {}
