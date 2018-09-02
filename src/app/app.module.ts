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
import { RegisterDoctorPage } from '../pages/register-doctor/register-doctor';
import { LoginUserPage } from '../pages/login-user/login-user';
import { TicketListPage } from '../pages/ticket-list/ticket-list';
import { SuccessActivationPage } from '../pages/success-activation/success-activation';
import { MakeAppointment_1Page } from '../pages/make-appointment-1/make-appointment-1';
import { MakeAppointment_2Page } from '../pages/make-appointment-2/make-appointment-2';
import { MakeAppointment_3Page } from '../pages/make-appointment-3/make-appointment-3';
import { MakeAppointment_4Page } from '../pages/make-appointment-4/make-appointment-4';



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
    TicketListPage,
    RegisterDoctorPage,
    SuccessActivationPage,
    MakeAppointment_1Page,
    MakeAppointment_2Page,
    MakeAppointment_3Page,
    MakeAppointment_4Page,
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
    RegisterDoctorPage,
    TicketListPage,
    SuccessActivationPage,
    MakeAppointment_1Page,
    MakeAppointment_2Page,
    MakeAppointment_3Page,
    MakeAppointment_4Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
