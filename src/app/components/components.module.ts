import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TimerProgress } from './timer-progress/timer-progress';


export const components = [
  TimerProgress,
 
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}