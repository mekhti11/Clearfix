webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera) {
        this.camera = camera;
    }
    CameraProvider.prototype.getPictureFromCamera = function () {
        return this.getImage(this.camera.PictureSourceType.CAMERA, true);
    };
    CameraProvider.prototype.getPictureFromPhotoLibrary = function () {
        return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    // This method takes optional parameters to make it more customizable
    CameraProvider.prototype.getImage = function (pictureSourceType, crop, quality, allowEdit, saveToAlbum) {
        if (crop === void 0) { crop = false; }
        if (quality === void 0) { quality = 50; }
        if (allowEdit === void 0) { allowEdit = true; }
        if (saveToAlbum === void 0) { saveToAlbum = true; }
        var options = {
            quality: quality,
            allowEdit: allowEdit,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: pictureSourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: saveToAlbum
        };
        // If set to crop, restricts the image to a square of 600 by 600
        if (crop) {
            options['targetWidth'] = 600;
            options['targetHeight'] = 600;
        }
        return this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/png;base64,' + imageData;
            return base64Image;
        }, function (error) {
            console.log('CAMERA ERROR -> ' + JSON.stringify(error));
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.provider.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppointmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentsPage');
    };
    AppointmentsPage.prototype.infoAppointment = function () {
        console.log("Randevu detayları");
    };
    AppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointments',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/appointments/appointments.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVULARIM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card style="background-color:#EBEDEF;">\n    <ion-card-content>\n      <h2>Randevu No: 743</h2><br>\n      <h2>Randevu Tarihi: 28 şubat 2018 19:40</h2><br>\n      <h2>Randevu Durumu: ücretsiz muayene hakkı </h2><br>\n    </ion-card-content>\n    <button ion-button full style="background-color: #4FC3F7;" (click)="infoAppointment()">Randevu Detayı</button> <br>\n    \n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/appointments/appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginDoctorPage = /** @class */ (function () {
    function LoginDoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginDoctorPage');
    };
    LoginDoctorPage.prototype.login = function () {
        console.log("Bana tıkladın login");
        // doktorun kaydına bakılacak, kaydı var mı yok mu?
        // doktor login olduktan sonra, doktoru işlem sayfasına atmasını gerekiyor
    };
    LoginDoctorPage.prototype.register = function () {
        console.log("Bana tıkladın Register");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__["a" /* RegisterDoctorPage */]);
    };
    LoginDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-doctor/login-doctor.html"*/'<!--\n  Generated template for the LoginDoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor"> \n    <ion-title text-center>HEKİM GİRİŞİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div col-lg-4 class="login-content card" padding>\n\n        <!-- Logo -->\n        <div padding text-center>\n          <div class="logo primary-bg">\n              <img src="/assets/imgs/clearfix.png"/>\n          </div>\n        </div>\n    \n        <!-- Login form -->\n        <form (ngSubmit)="login()">\n    \n          <ion-item>\n              \n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n            \n            <ion-input type="email">\n            </ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre</ion-label>\n            <ion-input type="password">\n            </ion-input>\n          </ion-item>\n    \n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n    \n        <div margin-top>\n          <button ion-button block class="button-middle" type="submit">\n              GIRIŞ YAP \n          </button>\n        </div>\n      </form>\n        <!-- Other links -->\n        <div text-center margin-top>\n          <span ion-text (click)="register()">Hesabın yok mu?<a>Kaydol</a></span>\n        </div>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-doctor/login-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginDoctorPage);
    return LoginDoctorPage;
}());

//# sourceMappingURL=login-doctor.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_appointments__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__appointments_appointments__["a" /* AppointmentsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Anasayaf" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Randevularım" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Hesabim" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="İletişim" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_with_doctor_chat_with_doctor__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulation_simulation__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.timer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__timer_timer__["a" /* TimerPage */]);
    };
    AboutPage.prototype.chatWithDoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */]);
    };
    AboutPage.prototype.simulation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__simulation_simulation__["a" /* SimulationPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="tabColor">\n    <ion-title text-center>\n      HESABIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-card style="background-color:rgb(220, 241, 243);">\n          <ion-card-content>\n            <b style="font-size:18px; color:rgb(75, 168, 211); "> Lütfen aşağıdaki işlemlerden birini seçiniz</b>\n          </ion-card-content>\n        </ion-card>\n        </div>\n   \n  <button ion-button class="button-middle" (click)="chatWithDoctor()">Doktor ile iletişime geçiniz</button>\n  <button ion-button class="button-middle" (click)="timer()">Değiştirme süresi</button>\n  <button ion-button class="button-middle" (click)="simulation()">3D simülasyon</button>\n  \n \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerPage = /** @class */ (function () {
    /*  time_defined = 100;
     time_current; */
    function TimerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimerPage');
        /*  var element = document.getElementById("timer");
         element.style.setProperty("$duration", this.time_defined + "s"); */
    };
    TimerPage.prototype.ionViewDidEnter = function () {
        /* setTimeout(this.timerTick(), 1000); */
    };
    TimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timer',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/timer/timer.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title>Timer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!--   <div class="radial-timer s-animate" id="timer">\n        <div class="radial-timer-half"></div>\n        <div class="radial-timer-half"></div>\n      </div>\n    {{time_defined}} -->\n    \n\n    \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/timer/timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TimerPage);
    return TimerPage;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWithDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatWithDoctorPage = /** @class */ (function () {
    function ChatWithDoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatWithDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatWithDoctorPage');
    };
    ChatWithDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-with-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/chat-with-doctor/chat-with-doctor.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title >chat-with-doctor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item  no-lines> <!---burada *ngFor olacak-->\n          <div class="chat-status" text-center >\n            <span class="chat-date"><!-- {{chat.sendDate | date:\'short\'}} --></span>\n            <span class="chat-content-center"><!-- {{chat.message}} --></span>\n          </div>\n          <ng-template #message>\n            <div class="chat-message" text-right > <!-- *ngIf="chat.user === nickname" burasi doktor attiginda sag gider mesaj --> \n              <div class="right-bubble">\n                <span class="msg-name">Sen</span> <!-- Yani doktor olacak burada -->\n                <span class="msg-date"><!-- {{chat.sendDate | date:\'short\'}} --></span>\n                <p text-wrap><!-- {{chat.message}} --></p>\n              </div>\n            </div>\n            <div class="chat-message" text-left > <!-- *ngIf="chat.user !== nickname" burasi hasta attiginda sola gider --> \n              <div class="left-bubble">\n                <span class="msg-name"><!-- {{chat.user}} --></span>\n                <span class="msg-date"><!-- {{chat.sendDate | date:\'short\'}} --></span>\n                <p text-wrap><!-- {{chat.message}} --></p>\n              </div>\n            </div>\n          </ng-template>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="Bir mesaj yaz"   name="message"></ion-input> <!-- [(ngModel)]="data.message" inputun içinde olacak -->\n        </ion-col>\n        <ion-col col-2 > <!-- (click)="sendMessage()"  gönderme buttonu --> \n          <ion-icon name="paper-plane"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/chat-with-doctor/chat-with-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChatWithDoctorPage);
    return ChatWithDoctorPage;
}());

//# sourceMappingURL=chat-with-doctor.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // videoyu çalıştırmak için bu kütüphaneye çağırdım
var SimulationPage = /** @class */ (function () {
    function SimulationPage(navCtrl, navParams, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        // linki buradan aliyor.
        this.vid = 'http://real-dental.com/3df2i/index.html?mlink=http://real-dental.com/3df2i/Client1651/28248032/1A5F749D74534FB285C394E17F2967FF.iiwgl&fg=000&bg=eee&p=UCHGCM';
    }
    SimulationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SimulationPage');
    };
    SimulationPage.prototype.sanitizer = function (vid) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(vid);
    };
    SimulationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simulation',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/simulation/simulation.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title >3D Simülasyon</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <iframe class="iframe" [src]="sanitizer(vid)" frameborder="0"  allowfullscreen></iframe>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/simulation/simulation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SimulationPage);
    return SimulationPage;
}());

//# sourceMappingURL=simulation.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="tabColor">\n    <ion-title text-center>\n      İLETİŞİM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewAccountPage = /** @class */ (function () {
    function NewAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAccountPage');
    };
    NewAccountPage.prototype.closePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // one time password
    NewAccountPage.prototype.sendSmsOPT = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__["a" /* SmsOtpPage */]);
    };
    NewAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-account',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/new-account/new-account.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>YENİ HESAP OLUŞTUR</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="closePage()">\n         Kapat    \n         </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n      </ion-card>\n\n    <ion-item>\n        <ion-label style="font-weight: bold;">+90</ion-label>\n          <ion-input type="tel"   placeholder="(111)-111-1111" pattern="06([0-9]{3})-([0-9]{3})-([0-9]{4})"></ion-input> \n      </ion-item>\n      <br>\n      <button ion-button class="button-middle" (click)="sendSmsOPT()">AKTİVASYON KODU GÖNDER</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/new-account/new-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewAccountPage);
    return NewAccountPage;
}());

//# sourceMappingURL=new-account.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__password_password__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmsOtpPage = /** @class */ (function () {
    function SmsOtpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SmsOtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmsOtpPage');
    };
    SmsOtpPage.prototype.closePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SmsOtpPage.prototype.completeAppointment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__password_password__["a" /* PasswordPage */]);
    };
    SmsOtpPage.prototype.repeatTheSmsOPT = function () {
    };
    SmsOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sms-otp',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/sms-otp/sms-otp.html"*/'<!--\n  Generated template for the SmsOtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HESAP AKTİVASYONU </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="closePage()">\n         Kapat    \n         </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n      </ion-card>\n      <ion-item>\n          <ion-label stacked>SMS ile gelen şifre:<br></ion-label> \n          <ion-input type="number" placeholder="XXXXXX"></ion-input>\n        </ion-item>\n        <button ion-button class="button-middle" (click)="completeAppointment()">AKTİVASYONU TAMAMLA</button>\n        <button ion-button class="button-middle" (click)="repeatTheSmsOPT()">ŞİFREYİ TEKRAR GÖNDER</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/sms-otp/sms-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], SmsOtpPage);
    return SmsOtpPage;
}());

//# sourceMappingURL=sms-otp.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_activation_success_activation__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    PasswordPage.prototype.loginUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__success_activation_success_activation__["a" /* SuccessActivationPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/password/password.html"*/'<!--\n  Generated template for the PasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title> Şifre Oluşturma</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> <b style="color:rgb(101, 183, 221);">Şifrenizi Oluşturunuz</b></div>\n      </ion-card>\n      <form (ngSubmit)="loginUser()">\n\n            \n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n              <ion-input type="password">\n              </ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre Onaylayınız:</ion-label>\n                <ion-input type="password">\n                </ion-input>\n              </ion-item>\n      \n        \n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n          <div margin-top>\n            <button ion-button block class="button-middle" type="submit">\n              ONAYLA\n            </button>\n          </div>\n        </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__make_appointment_1_make_appointment_1__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuccessActivationPage = /** @class */ (function () {
    function SuccessActivationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuccessActivationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessActivationPage');
    };
    SuccessActivationPage.prototype.homePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    SuccessActivationPage.prototype.makeappointment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */]);
    };
    SuccessActivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-success-activation',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/success-activation/success-activation.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HESAP AKTİVASYONU</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> Tebrikler! Aktivasyon işlemleri başarıyla tamamlandı.</div>\n      </ion-card>\n     \n        <button ion-button class="button-middle" (click)="makeappointment()">BAŞLA</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/success-activation/success-activation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */]])
    ], SuccessActivationPage);
    return SuccessActivationPage;
}());

//# sourceMappingURL=success-activation.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakeAppointment_1Page = /** @class */ (function () {
    function MakeAppointment_1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakeAppointment_1Page.prototype.ionViewDidLoad = function () {
        console.log('randevu al sayfsındayım');
    };
    MakeAppointment_1Page.prototype.nextStep_1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */]);
    };
    MakeAppointment_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-1',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-1/make-appointment-1.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (1/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br>Temel Bilgiler<br>Lütfen temel bilgilerinizi eksiksiz bir şekilde doldurunuz.</div>\n      </ion-card>\n      \n\n        <ion-item>\n          <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n          <ion-input type="text" placeholder="Lütfen adınızı yazınız"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soydınız</ion-label>\n          <ion-input type="text" placeholder="Lütfen soyadınızı yazınız"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n          <ion-input type="email"  placeholder="Lütfen E-posta adresinizi yazınız"></ion-input>\n        </ion-item>\n        \n        <ion-list>\n          <ion-item>\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n            <ion-select [(ngModel)]="gender">\n              <ion-option value="male">Bay</ion-option>\n              <ion-option value="female">Bayan</ion-option>\n            </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n            <ion-select [(ngModel)]="city">\n              <ion-option value="1">Adana</ion-option>\n              <ion-option value="2">Adıyaman</ion-option>\n              <ion-option value="3">Afyonkarahisar</ion-option>\n              <ion-option value="4">Ağrı</ion-option>\n              <ion-option value="5">Amasya</ion-option>\n              <ion-option value="6">Ankara</ion-option>\n              <ion-option value="7">Antalya</ion-option>\n              <ion-option value="8">Artvin</ion-option>\n              <ion-option value="9">Aydın</ion-option>\n              <ion-option value="10">Balıkesir</ion-option>\n              <ion-option value="11">Bilecik</ion-option>\n              <ion-option value="12">Bingöl</ion-option>\n              <ion-option value="13">Bitlis</ion-option>\n              <ion-option value="14">Bolu</ion-option>\n              <ion-option value="15">Burdur</ion-option>\n              <ion-option value="16">Bursa</ion-option>\n              <ion-option value="17">Çanakkale</ion-option>\n              <ion-option value="18">Çankırı</ion-option>\n              <ion-option value="19">Çorum</ion-option>\n              <ion-option value="20">Denizli</ion-option>\n              <ion-option value="21">Diyarbakır</ion-option>\n              <ion-option value="22">Edirne</ion-option>\n              <ion-option value="23">Elazığ</ion-option>\n              <ion-option value="24">Erzincan</ion-option>\n              <ion-option value="25">Erzurum</ion-option>\n              <ion-option value="26">Eskişehir</ion-option>\n              <ion-option value="27">Gaziantep</ion-option>\n              <ion-option value="28">Giresun</ion-option>\n              <ion-option value="29">Gümüşhane</ion-option>\n              <ion-option value="30">Hakkâri</ion-option>\n              <ion-option value="31">Hatay</ion-option>\n              <ion-option value="32">Isparta</ion-option>\n              <ion-option value="33">Mersin</ion-option>\n              <ion-option value="34">İstanbul</ion-option>\n              <ion-option value="35">İzmir</ion-option>\n              <ion-option value="36">Kars</ion-option>\n              <ion-option value="37">Kastamonu</ion-option>\n              <ion-option value="38">Kayseri</ion-option>\n              <ion-option value="39">Kırklareli</ion-option>\n              <ion-option value="40">Kırşehir</ion-option>\n              <ion-option value="41">Kocaeli</ion-option>\n              <ion-option value="42">Konya</ion-option>\n              <ion-option value="43">Kütahya</ion-option>\n              <ion-option value="44">Malatya</ion-option>\n              <ion-option value="45">Manisa</ion-option>\n              <ion-option value="46">Kahramanmaraş</ion-option>\n              <ion-option value="47">Mardin</ion-option>\n              <ion-option value="48">Muğla</ion-option>\n              <ion-option value="49">Muş</ion-option>\n              <ion-option value="50">Nevşehir</ion-option>\n              <ion-option value="51">Niğde</ion-option>\n              <ion-option value="52">Ordu</ion-option>\n              <ion-option value="53">Rize</ion-option>\n              <ion-option value="54">Sakarya</ion-option>\n              <ion-option value="55">Samsun</ion-option>\n              <ion-option value="56">Siirt</ion-option>\n              <ion-option value="57">Sinop</ion-option>\n              <ion-option value="58">Sivas</ion-option>\n              <ion-option value="59">Tekirdağ</ion-option>\n              <ion-option value="60">Tokat</ion-option>\n              <ion-option value="61">Trabzon</ion-option>\n              <ion-option value="62">Tunceli</ion-option>\n              <ion-option value="63">Şanlıurfa</ion-option>\n              <ion-option value="64">Uşak</ion-option>\n              <ion-option value="65">Van</ion-option>\n              <ion-option value="66">Yozgat</ion-option>\n              <ion-option value="67">Zonguldak</ion-option>\n              <ion-option value="68">Aksaray</ion-option>\n              <ion-option value="69">Bayburt</ion-option>\n              <ion-option value="70">Karaman</ion-option>\n              <ion-option value="71">Kırıkkale</ion-option>\n              <ion-option value="72">Batman</ion-option>\n              <ion-option value="73">Şırnak</ion-option>\n              <ion-option value="74">Bartın</ion-option>\n              <ion-option value="75">Ardahan</ion-option>\n              <ion-option value="76">Iğdır</ion-option>\n              <ion-option value="77">Yalova</ion-option>\n              <ion-option value="78">Karabük</ion-option>\n              <ion-option value="79">Kilis</ion-option>\n              <ion-option value="80">Osmaniye</ion-option>\n              <ion-option value="81">Düzce</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n          <ion-input type="text"  placeholder="Lütfen yaşadığınız ilçeyi yazınız"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek İstedikleriniz</ion-label>\n          <ion-textarea rows="4" [(ngModel)]="text" autosize placeholder="Eklemek istediğiniz...."></ion-textarea>\n        </ion-item>\n        <button ion-button class="button-middle" (click)="nextStep_1()">Sonraki Adım</button>\n\n      \n      \n\n        \n        \n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-1/make-appointment-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MakeAppointment_1Page);
    return MakeAppointment_1Page;
}());

//# sourceMappingURL=make-appointment-1.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_3_make_appointment_3__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeAppointment_2Page = /** @class */ (function () {
    function MakeAppointment_2Page(navCtrl, navParams, cameraProvider, loadingCtrl, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraProvider = cameraProvider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    MakeAppointment_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_2Page');
    };
    MakeAppointment_2Page.prototype.changePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    text: 'Kapat',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    MakeAppointment_2Page.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.nextStep_2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */]);
    };
    MakeAppointment_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-2',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-2/make-appointment-2.html"*/'<!--\n  Generated template for the MakeAppointment_2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (2/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br><h1 class="h1">FOTOĞRAF YÜKLEME</h1><br>Lütfen aşağıda belirtildiği gibi fotoğraflarınızı çekip yükleyiniz</div>\n      </ion-card>  <br><br>\n      <h5 class="h5">1. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                  <ion-avatar >\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                  </ion-avatar>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">2. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                  <ion-avatar >\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                  </ion-avatar>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">3. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                  <ion-avatar >\n                    <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                  </ion-avatar>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle" (click)="changePicture()" >3. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">4. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                  <ion-avatar >\n                     <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                  </ion-avatar>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">5. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <ion-avatar >\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                </ion-avatar>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n        <br><br><br><br>\n        <button ion-button class="button-nextStep" (click)="nextStep_2()">SONRAKİ ADIM</button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-2/make-appointment-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], MakeAppointment_2Page);
    return MakeAppointment_2Page;
}());

//# sourceMappingURL=make-appointment-2.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_4_make_appointment_4__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeAppointment_3Page = /** @class */ (function () {
    function MakeAppointment_3Page(navCtrl, navParams, cameraProvider, loadingCtrl, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraProvider = cameraProvider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    MakeAppointment_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_3Page');
    };
    MakeAppointment_3Page.prototype.changePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    text: 'Kapat',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    MakeAppointment_3Page.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.create_appointment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */]);
    };
    MakeAppointment_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-3',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-3/make-appointment-3.html"*/'<!--\n  Generated template for the MakeAppointment_3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (3/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br>\n          <h1 class="h1">BİLGİLERİNİZİ KONTROL EDİNİZ </h1>\n        <br>Lütfen bilgilerinizi son bir kez daha kontrol ediniz ve gönderiniz</div>\n    </ion-card><br><br>\n    \n    \n        <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n        <h5>Muratcan</h5>\n    \n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221); ">Soyadınız</ion-label>\n        <h5>Kılıç</h5>\n      \n      \n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n        <h5>murat34@gmail.com</h5>\n      \n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n        <h5>Bay</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n        <h5>İstanbul</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n        <h5>Kadıköy</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek istediğniz</ion-label>\n        <h5>Teknopark indiriminden yaralanmak istiyorum.</h5>\n\n        <h5 class="h5">1. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                    <ion-avatar >\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                    </ion-avatar>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">2. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                    <ion-avatar >\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                    </ion-avatar>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">3. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                    <ion-avatar >\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                    </ion-avatar>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle" (click)="changePicture()">3. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">4. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                    <ion-avatar >\n                      <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                   </ion-avatar>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">5. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                    <ion-avatar >\n                       <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n                    </ion-avatar>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n          <br><br><br><br>\n          <button ion-button class="button-edit-information">BİLİGİLERİMİ DÜZENLE</button>\n          <br>\n          <button ion-button class="button-edit-information" (click)="create_appointment()">RANDEVUYU OLUŞTUR</button>\n\n      \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-3/make-appointment-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], MakeAppointment_3Page);
    return MakeAppointment_3Page;
}());

//# sourceMappingURL=make-appointment-3.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointments_appointments__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakeAppointment_4Page = /** @class */ (function () {
    function MakeAppointment_4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakeAppointment_4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_4Page');
    };
    MakeAppointment_4Page.prototype.appointments = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__appointments_appointments__["a" /* AppointmentsPage */]);
    };
    MakeAppointment_4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-4',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-4/make-appointment-4.html"*/'<!--\n  Generated template for the MakeAppointment_4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (4/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center> <br>TEBRİKLER<br>Randevunuz başarılı bir şeklide oluşturulmuştur. </div>\n      </ion-card>\n      <br><br>\n      <button ion-button class="button-middle" (click)="appointments()">Randevularıma Git</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-4/make-appointment-4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], MakeAppointment_4Page);
    return MakeAppointment_4Page;
}());

//# sourceMappingURL=make-appointment-4.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginUserPage = /** @class */ (function () {
    function LoginUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginUserPage');
    };
    LoginUserPage.prototype.userLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]); // Deneme amaciyla anasayfaya atıyorum.
    };
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login-user',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-user/login-user.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>ÜYE GİRİŞİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n      <ion-card class="card-parent">\n          <img src="/assets/imgs/clearfix.png"/>\n          <div class="card-title" text-center><br> <b> Giriş Yapınız</b></div>\n        </ion-card>\n        <form (ngSubmit)="userLogin()">\n\n              <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Telefon:</ion-label>\n                <ion-input type="number" >\n                </ion-input>\n              </ion-item>\n        \n              <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n                <ion-input type="password">\n                </ion-input>\n              </ion-item>\n        \n          \n            <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n            <div margin-top>\n              <button ion-button block class="button-middle" type="submit">\n                GIRIŞ YAP\n              </button>\n            </div>\n          </form>\n \n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-user/login-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], LoginUserPage);
    return LoginUserPage;
}());

//# sourceMappingURL=login-user.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_category__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterDoctorPage = /** @class */ (function () {
    function RegisterDoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDoctorPage');
    };
    RegisterDoctorPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__category_category__["a" /* CategoryPage */]);
    };
    RegisterDoctorPage.prototype.login = function () {
        console.log("tıkladı");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    RegisterDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/register-doctor/register-doctor.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HEKİM KAYIT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div col-lg-4 class="login-content card" padding>\n        <!--logo-->\n        <div padding text-center>\n          <div class="logo primary-bg">\n              <img src="/assets/imgs/clearfix.png"/>\n          </div>\n          <h5 style="font-weight: bold; color:rgb(101, 183, 221);">Lütfen formu eksiksiz doldurunuz. Sadece Diş Hekimleri uygulamaya kayıt yapabilir.</h5>\n        </div>\n         <!-- Login form -->\n         <ion-list class="list-form list-no-border">\n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soyadınız</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Telefon</ion-label>\n                <ion-input type="tel"></ion-input>\n              </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreniz</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreyi onayla</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n      \n          </ion-list>\n      \n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n          <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n          <ion-label >Lisanslı Diş Hekimi olduğumu onaylıyorum. </ion-label>\n          \n          <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n          <ion-label>Beyan ettiğim bilgilerin doğruluğunu ve <a>Clearfix</a><br> üyelik kural ve koşullarını kabul ediyorum.</ion-label>\n          \n\n          <div margin-top>\n            <button ion-button block class="button-middle"  (click)="register()">\n              Kaydol\n            </button>\n          </div>\n      \n          <!-- Other links -->\n          <div text-center margin-top>\n            <span ion-text (click)="login()">Hesabın var mı?</span>\n          </div>\n         </div>\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/register-doctor/register-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], RegisterDoctorPage);
    return RegisterDoctorPage;
}());

//# sourceMappingURL=register-doctor.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_list_id_list__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.userList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__id_list_id_list__["a" /* IdListPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/category/category.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>Kategori</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid >\n        <ion-row>\n          <ion-col col-6>\n            \n           <ion-card class="cardColor" (click)="userList()">\n              <div class="divIcon">\n                  <ion-icon name="list-box" color="tabColor"></ion-icon>\n              </div>\n              <div>\n                <h3 text-center><b class="bfont">Tüm Vakalar</b></h3>\n              </div>\n              <div>\n                <br>\n                <h1 text-center><b>6</b></h1>\n              </div>\n           </ion-card>\n\n        </ion-col>\n        <ion-col col-6>\n            <ion-card class="cardColor" (click)="userList()">\n                <div class="divIcon">\n                    <ion-icon name="custom-ruler" color="tabColor"></ion-icon>\n                </div>\n                <div>\n                  <h3 text-center><b class="bfont">Ölçüler</b></h3>\n                </div>\n                <div>\n                  <br>\n                  <h1 text-center><b>8</b></h1>\n                </div>\n             </ion-card> \n      </ion-col >\n      <ion-col col-6>\n          <ion-card class="cardColor" (click)="userList()">\n              <div class="divIcon">\n                  <ion-icon name="qr-scanner" color="tabColor"></ion-icon>\n              </div>\n              <div>\n                <h3 text-center><b class="bfont">Tarama</b></h3>\n              </div>\n              <div>\n                <br>\n                <h1 text-center><b>4</b></h1>\n              </div>\n           </ion-card> \n    </ion-col >\n    <ion-col col-6>\n        <ion-card class="cardColor" (click)="userList()">\n            <div class="divIcon">\n                <ion-icon name="custom-register" color="tabColor"></ion-icon>\n                \n            </div>\n            <div>\n              <h3 text-center><b class="bfont">Kayıt</b></h3>\n            </div>\n            <div>\n              <br>\n              <h1 text-center><b>4</b></h1>\n            </div>\n         </ion-card> \n  </ion-col >\n  <ion-col col-6>\n      <ion-card class="cardColor" (click)="userList()">\n          <div class="divIcon">\n              <ion-icon name="cog" color="tabColor"></ion-icon>\n          </div>\n          <div>\n            <h3 text-center><b class="bfont">Set-Up</b></h3>\n          </div>\n          <div>\n            <br>\n            <h1 text-center><b>7</b></h1>\n          </div>\n       </ion-card> \n  </ion-col >\n  <ion-col col-6>\n      <ion-card class="cardColor" (click)="userList()">\n          <div class="divIcon">\n              <ion-icon name="custom-plan" color="tabColor"></ion-icon>\n          </div>\n          <div>\n            <h3 text-center><b class="bfont">Planlama</b></h3>\n          </div>\n          <div>\n            <br>\n            <h1 text-center><b>3</b></h1>\n          </div>\n       </ion-card> \n  </ion-col >\n  <ion-col col-6>\n      <ion-card class="cardColor" (click)="userList()">\n          <div class="divIcon">\n              <ion-icon name="log-out" color="tabColor"></ion-icon>\n          </div>\n          <div>\n            <h3 text-center><b class="bfont">Export</b></h3>\n          </div>\n          <div>\n            <br>\n            <h1 text-center><b>2</b></h1>\n          </div>\n       </ion-card> \n  </ion-col >\n  <ion-col col-6>\n      <ion-card class="cardColor" (click)="userList()">\n          <div class="divIcon">\n              <ion-icon name="color-fill" color="tabColor"></ion-icon>\n          </div>\n          <div>\n            <h3 text-center><b class="bfont">P.Ç.T</b></h3>\n          </div>\n          <div>\n            <br>\n            <h1 text-center><b>10</b></h1>\n          </div>\n       </ion-card> \n  </ion-col >\n  <ion-col col-6>\n    <ion-card class="cardColor" (click)="userList()">\n        <div class="divIcon">\n            <ion-icon name="custom-truck" color="tabColor"></ion-icon>\n        </div>\n        <div>\n          <h3 text-center><b class="bfont">A.F.K</b></h3>\n        </div>\n        <div>\n          <br>\n          <h1 text-center><b>21</b></h1>\n        </div>\n     </ion-card> \n  </ion-col >\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_list_ticket_list__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdListPage = /** @class */ (function () {
    function IdListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IdListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdListPage');
    };
    IdListPage.prototype.ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ticket_list_ticket_list__["a" /* TicketListPage */]);
    };
    IdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-id-list',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/id-list/id-list.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title>Hasta listesi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card no-padding style="box-shadow: none;">\n        <ion-card-content>\n            <b style="font-size:25px; color:rgb(101, 183, 221);">Hasta listesi</b>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)="ticket()">\n          <ion-card-header>\n            <b> Yağmur Zengin 0 </b>\n          </ion-card-header>\n        </ion-card>\n        <ion-card (click)="ticket()">\n        <ion-card-header>\n          <b> Yağmur Zengin 1 </b>\n        </ion-card-header>\n        </ion-card>\n        <ion-card (click)="ticket()">\n          <ion-card-header>\n            <b> Yağmur Zengin 2 </b>\n          </ion-card-header>\n         </ion-card>\n         <ion-card (click)="ticket()">\n            <ion-card-header>\n              <b> Yağmur Zengin 3 </b>\n            </ion-card-header>\n          </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/id-list/id-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IdListPage);
    return IdListPage;
}());

//# sourceMappingURL=id-list.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketListPage = /** @class */ (function () {
    function TicketListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TicketListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketListPage');
    };
    TicketListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-list',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/ticket-list/ticket-list.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title >TİCKET LİSTESİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  \n  <ion-grid>\n\n    <ion-row center>\n      <ion-col col-6 no-padding>\n        <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n              ID\n            </ion-card-header>\n            <ion-card-content>\n             <b style="font-size:20px;">12345678</b>\n            </ion-card-content>\n        </ion-card>\n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor"> \n            <ion-card-header style="font-size:20px;">\n                Durum\n              </ion-card-header>\n              <ion-card-content>\n              <ion-badge color="primary" style="font-size:18px;">İşleme Alınıyor</ion-badge>\n            </ion-card-content>\n        </ion-card>   \n      </ion-col>\n      <ion-col col-6 no-padding> \n          <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n                Öncelik\n            </ion-card-header>\n            <ion-card-content>\n                <ion-badge color="danger" style="font-size:18px;">24-48 saat</ion-badge>\n            </ion-card-content>\n          </ion-card>   \n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n          <ion-card-header style="font-size:20px;">\n              Konu\n          </ion-card-header>\n          <ion-card-content>\n              <b style="font-size:18px;">Mine Uzunbayır</b>\n          </ion-card-content>\n        </ion-card>   \n  </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n              Yükseltildi\n            </ion-card-header>\n            <ion-card-content>\n                <b style="font-size:16px;">Dr.İlke Kardelen</b>\n            </ion-card-content>\n        </ion-card>   \n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n                Kategori\n            </ion-card-header>\n            <ion-card-content>\n                <b style="font-size:16px;">Vaka Danışma</b>\n            </ion-card-content>\n        </ion-card>   \n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n                Yetkili\n            </ion-card-header>\n            <ion-card-content>\n                <b style="font-size:18px;">Yok</b>\n            </ion-card-content>\n        </ion-card>   \n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n            <ion-card-header style="font-size:20px;">\n                Oluşturuldu\n            </ion-card-header>\n            <ion-card-content>\n                <b style="font-size:16px;">2018/08/29 12:23:09</b>\n            </ion-card-content>\n        </ion-card>   \n    </ion-col>\n    <ion-col col-6 no-padding> \n        <ion-card text-center class="cardColor">\n        <ion-card-header style="font-size:20px;">\n            Güncellendi\n        </ion-card-header>\n        <ion-card-content>\n            <b style="font-size:16px;">2018/08/29 12:23:09</b>\n        </ion-card-content>\n        </ion-card>   \n   </ion-col>\n   <ion-col col-6 no-padding> \n      <ion-card text-center class="cardColor">\n      <ion-card-header style="font-size:20px;">\n          Adım\n      </ion-card-header>\n      <ion-card-content>\n          <ion-badge color="secondary" style="font-size:18px;">Tamamlandı</ion-badge>\n      </ion-card-content>\n      </ion-card>   \n     </ion-col>\n      </ion-row>\n    </ion-grid>   \n     \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/ticket-list/ticket-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TicketListPage);
    return TicketListPage;
}());

//# sourceMappingURL=ticket-list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appointments_appointments__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_account_new_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sms_otp_sms_otp__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_doctor_login_doctor__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_doctor_register_doctor__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_user_login_user__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ticket_list_ticket_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_timer_timer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_simulation_simulation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_category_category__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_password_password__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chat_with_doctor_chat_with_doctor__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_success_activation_success_activation__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_make_appointment_1_make_appointment_1__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_make_appointment_2_make_appointment_2__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_3_make_appointment_3__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_4_make_appointment_4__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_id_list_id_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_providers_camera_provider__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// imort pages

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__app_providers_camera_provider__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_account_new_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_user_login_user__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.newAccount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__new_account_new_account__["a" /* NewAccountPage */]);
    };
    HomePage.prototype.loginUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_user_login_user__["a" /* LoginUserPage */]);
    };
    HomePage.prototype.loginDoctor = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="tabColor">\n    <ion-title text-center>CLEARFIX</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center> <br> clearfix mobil <br>uygulamasına hoş geldiniz.</div>\n      </ion-card>\n      \n      <button ion-button class="button-middle" (click)="newAccount()">YENİ HESAP OLUŞTUR</button>\n      <button ion-button class="button-middle" (click)="loginUser()">ÜYE GİRİŞİ</button>\n      <button ion-button class="button-middle" (click)="loginDoctor()">HEKİM GİRİŞİ</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map