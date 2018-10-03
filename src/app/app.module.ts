import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from './components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';

    // Cordova
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


    // import pages
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
import { TimerPage } from '../pages/timer/timer';
import { SimulationPage } from '../pages/simulation/simulation';
import { CategoryPage } from '../pages/category/category';
import { PasswordPage } from '../pages/password/password';
import { ChatWithDoctorPage } from '../pages/chat-with-doctor/chat-with-doctor';
import { SuccessActivationPage } from '../pages/success-activation/success-activation';
import { MakeAppointment_1Page } from '../pages/make-appointment-1/make-appointment-1';
import { MakeAppointment_2Page } from '../pages/make-appointment-2/make-appointment-2';
import { MakeAppointment_3Page } from '../pages/make-appointment-3/make-appointment-3';
import { MakeAppointment_4Page } from '../pages/make-appointment-4/make-appointment-4';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IdListPage } from '../pages/id-list/id-list';
import { CameraProvider } from '../app/providers/camera.provider';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/i18n/', '.json');
 }



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
    IdListPage,
    SimulationPage,
    TimerPage,
    CategoryPage,
    PasswordPage,
    RegisterDoctorPage,
    ChatWithDoctorPage,
    SuccessActivationPage,
    MakeAppointment_1Page,
    MakeAppointment_2Page,
    MakeAppointment_3Page,
    MakeAppointment_4Page,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false, 
      autoFocusAssist: false
    }),
    TranslateModule.forRoot({
      loader: {
       provide: TranslateLoader,
       useFactory: (setTranslateLoader),
       deps: [HttpClient]
     }
    })
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
    SimulationPage,
    CategoryPage,
    ChatWithDoctorPage,
    IdListPage,
    TimerPage,
    PasswordPage,
    SuccessActivationPage,
    MakeAppointment_1Page,
    MakeAppointment_2Page,
    MakeAppointment_3Page,
    MakeAppointment_4Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraProvider,
    ScreenOrientation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
