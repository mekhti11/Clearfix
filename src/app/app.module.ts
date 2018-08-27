import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

    // imort pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { NewAccountPage } from '../pages/new-account/new-account';
import { SmsOtpPage } from '../pages/sms-otp/sms-otp';
import { LoginDoctorPage } from '../pages/login-doctor/login-doctor';
import { LoginUserPage } from '../pages/login-user/login-user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppointmentsPage,
    NewAccountPage,
    SmsOtpPage,
    LoginDoctorPage,
    LoginUserPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppointmentsPage,
    NewAccountPage,
    SmsOtpPage,
    LoginDoctorPage,
    LoginUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
