import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
 /*  time_defined = 100;
  time_current; */
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
   /*  var element = document.getElementById("timer");
    element.style.setProperty("$duration", this.time_defined + "s"); */

  }

  ionViewDidEnter() {
    /* setTimeout(this.timerTick(), 1000); */
  }

  /*timerTick(){
     this.time_current = setTimeout(x => 
      {
          if(this.time_defined <= 0) {
            this.time_defined = 0;
          }

          this.time_defined -= 1;

          if(this.time_defined > 0){
            
            this.timerTick();
          }

      }, 1000);

  }*/
}

