import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http} from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { LocalNotifications } from '@ionic-native/local-notifications';

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'timer-progress',
  templateUrl: 'timer-progress.html'
})
export class TimerProgress {

  timeInSeconds = 1209600;
  timer: CountdownTimer;
  private increment;
  private transform;
  private percent;
  private fixTransform;
  private plak_sayisi:number;
  private isPhoto;
  constructor(private sanitizer: DomSanitizer, public http: Http,
             private notification:LocalNotifications) { 

    this.postDataLoad( (json_result) => {
      console.log(json_result);
      if(json_result['message'] === 'found') {
        this.timeInSeconds = json_result['time'];
        this.initTimer();
        this.startTimerWithoutPostDataSend();
      }
      else
      {
        this.timeInSeconds = 1209600;
        this.initTimer();
      }
      
    });
    this.getPlakSayisi();
 
    
  }

  ngOnInit() {
    
  }



  ifPhoto(){
    if(this.plak_sayisi>1 && this.plak_sayisi % 2 == 1){
      return true;
    }
    else{
      return false;
    }
    // localStorage.setItem("isPhoto",status)
  }

  addPhotos(){

  }

  getPlakSayisi(){
    this.postDataPlakSayisi((json_result) => {
      console.log(json_result);
      if(json_result['message'] === 'success') {
        this.plak_sayisi = json_result['plak_sayisi'];
        this.plak_sayisi++;          
      }
      else{
        
      }
      
    });
  }

  postDataPlakSayisiSend() {
    let formData = new FormData();

    formData.append("action", "send");
    formData.append("id", localStorage.getItem("id"));
    formData.append("plak_sayisi", this.plak_sayisi.toString());

    this.http.post("http://www.clearfix.com.tr/clearfix_new_app/plak_sayisi.php", formData).subscribe(function response(res) {
      console.log(JSON.parse(res['_body']));
      
    });
    this.plak_sayisi++;
  }
  postDataPlakSayisi(callback) {
    let formData = new FormData();

    formData.append("action", "load");
    formData.append("id", localStorage.getItem("id"));

    this.http.post("http://www.clearfix.com.tr/clearfix_new_app/plak_sayisi.php", formData).subscribe(function response(res) {
      var json_result = JSON.parse(res['_body']);
      callback(json_result);
    });
  }

  hasFinished() {
    return this.timer.hasFinished;
  }
  initProgressBar() {
    this.percent = 100;
    this.increment = 180 / 100;
    const progress = 'rotate(' + this.increment * this.percent + 'deg)';
    this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
    this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
  }

  initTimer() {
    this.initProgressBar();
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    
    if(this.plak_sayisi % 2 == 1){
      this.isPhoto = true;
    }

  }

  reset(){
    this.initProgressBar();
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    
    if(this.plak_sayisi % 2 == 1){
      this.isPhoto = true;
    }

    //send plak_sayisi to db
    this.postDataPlakSayisiSend();

  }

  startTimerWithoutPostDataSend() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
    this.postDataSend();

    //triggered notification
    var d = new Date();
    d.setMonth(d.getMonth() + 1);
    this.notification.schedule({
      title : 'Clearfix',
      text: 'Lütfen Değiştirme Süresi sayfasından yeni fotoğraflarınızı yükleyiniz.',
      trigger: {at: d},
      led: 'FF0000',
   });
  }

  postDataSend() {
    let formData = new FormData();

    formData.append("action", "send");
    formData.append("id", localStorage.getItem("id"));
    formData.append("time", "1209600");

    this.http.post("http://www.clearfix.com.tr/clearfix_new_app/timer.php", formData).subscribe(function response(res) {
      
    });
  }


  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  postDataLoad(callback) {
    let formData = new FormData();

    formData.append("action", "load");
    formData.append("id", localStorage.getItem("id"));

    this.http.post("http://www.clearfix.com.tr/clearfix_new_app/timer.php", formData).subscribe(function response(res) {
      var json_result = JSON.parse(res['_body']);
      callback(json_result);
    });
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.percent = this.timer.secondsRemaining / this.timer.seconds * 100;
      this.increment = 180 / 100;
      const progress = 'rotate(' + this.increment * this.percent + 'deg)';
      this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
      this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const days = Math.floor(secNum / 86400);
    const hours = Math.floor((secNum - (days * 86400)) / 3600);
    const minutes = Math.floor((secNum - (days * 86400) - (hours * 3600)) / 60);
    const seconds = secNum - (days * 86400) - (hours * 3600) - (minutes * 60);
    let daysString = '';
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    daysString = (days < 10) ? '0' + days : days.toString();
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return daysString + ":" + hoursString + ':' + minutesString + ':' + secondsString;
  }

}