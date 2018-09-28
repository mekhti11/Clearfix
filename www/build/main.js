webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(210);
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

/***/ 103:
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
<<<<<<< HEAD
            selector: 'page-appointments',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/appointments/appointments.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVULARIM</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="background-color:#EBEDEF;">\n\n    <ion-card-content>\n\n      <h2>Randevu No: 743</h2><br>\n\n      <h2>Randevu Tarihi: 28 şubat 2018 19:40</h2><br>\n\n      <h2>Randevu Durumu: ücretsiz muayene hakkı </h2><br>\n\n    </ion-card-content>\n\n    <button ion-button full style="background-color: #4FC3F7;" (click)="infoAppointment()">Randevu Detayı</button> <br>\n\n    \n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/appointments/appointments.html"*/,
=======
            selector: 'page-appointments',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/appointments/appointments.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVULARIM</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="background-color:#EBEDEF;">\n\n    <ion-card-content>\n\n      <h2>Randevu No: 743</h2><br>\n\n      <h2>Randevu Tarihi: 28 şubat 2018 19:40</h2><br>\n\n      <h2>Randevu Durumu: ücretsiz muayene hakkı </h2><br>\n\n    </ion-card-content>\n\n    <button ion-button full style="background-color: #4FC3F7;" (click)="infoAppointment()">Randevu Detayı</button> <br>\n\n    \n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/appointments/appointments.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginDoctorPage = /** @class */ (function () {
    function LoginDoctorPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    LoginDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginDoctorPage');
    };
    // Callback functions control asynchronous methods.
    LoginDoctorPage.prototype.postData = function (callback) {
        // Create credentials.
        var formData = new FormData();
        formData.append("action", "authenticate");
        formData.append("username", this.user_data);
        formData.append("password", this.pass_data);
        var json_result;
        this.http.post("http://localhost:8000/php/login-doctor.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    LoginDoctorPage.prototype.login = function () {
        var _this = this;
        console.log("Bana tıkladın login");
        // LOGIN FUNCTION
        // Check if username (telephone number) is empty or not.
        if (!this.user_data) {
            this.warning_user = "Kullanici adi boş bırakılamaz.";
        }
        else
            this.warning_user = "";
        // Check if password is empty or not.
        if (!this.pass_data) {
            this.warning_pass = "Şifre boş bırakılamaz.";
        }
        else
            this.warning_pass = "";
        // Check whether all credentials are valid or not.
        if (this.user_data && this.pass_data) {
            var loader_1 = this.loadingCtrl.create({
                content: 'Lütfen Bekleyiniz...'
            });
            loader_1.present();
            this.postData(function (json_result) {
                loader_1.dismiss();
                // Check if database query is valid or not.
                if (json_result['message'] == 'error') {
                    _this.warning_user = "Email veya şifre yanlış.";
                    console.log(_this.warning_user);
                }
                else {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('name', json_result['name']);
                    localStorage.setItem('surname', json_result['surname']);
                    localStorage.setItem('username', json_result['username']);
                    localStorage.setItem('authority', json_result['user_authority']);
                    localStorage.setItem("id", json_result['id']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); // After the authentication is complete, redirect to the main page.
                }
            });
        }
    };
    LoginDoctorPage.prototype.register = function () {
        console.log("Bana tıkladın Register");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__["a" /* RegisterDoctorPage */]);
    };
    LoginDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-login-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/login-doctor/login-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HEKİM GİRİŞİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding>\n\n\n\n        <!-- Logo -->\n\n        <div padding text-center>\n\n          <div class="logo primary-bg">\n\n              <img src="/assets/imgs/clearfix.png"/>\n\n          </div>\n\n        </div>\n\n\n\n        <!-- Login form -->\n\n\n\n          <ion-item>\n\n\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n\n\n\n            <ion-input type="email" [(ngModel)]="user_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre</ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n\n\n        <div margin-top>\n\n          <button ion-button block (click)="login()" class="button-middle">\n\n              GIRIŞ YAP\n\n          </button>\n\n        </div>\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n          <span ion-text (click)="register()">Hesabın yok mu?<a>Kaydol</a></span>\n\n        </div>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/login-doctor/login-doctor.html"*/,
=======
            selector: 'page-login-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/login-doctor/login-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HEKİM GİRİŞİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding>\n\n\n\n        <!-- Logo -->\n\n        <div padding text-center>\n\n          <div class="logo primary-bg">\n\n              <img src="/assets/imgs/clearfix.png"/>\n\n          </div>\n\n        </div>\n\n\n\n        <!-- Login form -->\n\n\n\n          <ion-item>\n\n\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n\n\n\n            <ion-input type="email" [(ngModel)]="user_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre</ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n\n\n        <div margin-top>\n\n          <button ion-button block (click)="login()" class="button-middle">\n\n              GIRIŞ YAP\n\n          </button>\n\n        </div>\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n          <span ion-text (click)="register()">Hesabın yok mu?<a>Kaydol</a></span>\n\n        </div>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/login-doctor/login-doctor.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginDoctorPage);
    return LoginDoctorPage;
}());

//# sourceMappingURL=login-doctor.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_appointments__ = __webpack_require__(103);
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Anasayfa" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Randevularım" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Hesabım" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="İletişim" tabIcon="contacts"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/tabs/tabs.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Anasayfa" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Randevularım" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Hesabım" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="İletişim" tabIcon="contacts"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/tabs/tabs.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_with_doctor_chat_with_doctor__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulation_simulation__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TranslateService } from '@ngx-translate/core';
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
<<<<<<< HEAD
            selector: 'page-about',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      HESABIM\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-card style="background-color:rgb(220, 241, 243);">\n\n          <ion-card-content>\n\n            <b style="font-size:18px; color:rgb(75, 168, 211); "> Lütfen aşağıdaki işlemlerden birini seçiniz</b>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        </div>\n\n   \n\n  <button ion-button class="button-middle" (click)="chatWithDoctor()">Doktor ile iletişime geçiniz</button>\n\n  <button ion-button class="button-middle" (click)="timer()">Değiştirme süresi</button>\n\n  <button ion-button class="button-middle" (click)="simulation()">3D simülasyon</button>\n\n  \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/about/about.html"*/
=======
            selector: 'page-about',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      HESABIM\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-card style="background-color:rgb(220, 241, 243);">\n\n          <ion-card-content>\n\n            <b style="font-size:18px; color:rgb(75, 168, 211); "> Lütfen aşağıdaki işlemlerden birini seçiniz</b>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        </div>\n\n   \n\n  <button ion-button class="button-middle" (click)="chatWithDoctor()">Doktor ile iletişime geçiniz</button>\n\n  <button ion-button class="button-middle" (click)="timer()">Değiştirme süresi</button>\n\n  <button ion-button class="button-middle" (click)="simulation()">3D simülasyon</button>\n\n  \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/about/about.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
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
    function TimerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimerPage');
    };
    TimerPage.prototype.ionViewDidEnter = function () {
    };
    TimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-timer',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/timer/timer.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>Zamanlayıcı</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <timer-progress #countdownTimerProgress></timer-progress>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/timer/timer.html"*/,
=======
            selector: 'page-timer',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/timer/timer.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>Zamanlayıcı</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <timer-progress #countdownTimerProgress></timer-progress>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/timer/timer.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TimerPage);
    return TimerPage;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWithDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function ChatWithDoctorPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        var loader = this.loadingCtrl.create({
            content: 'Lütfen Bekleyiniz...'
        });
        loader.present();
        this.refreshMessages();
        loader.dismiss();
    }
    ChatWithDoctorPage.prototype.refreshMessages = function () {
        var _this = this;
        this.loadMessages(function (json_result) {
            _this.chats = json_result;
            _this.message = '';
            console.log(_this.chats);
        });
    };
    ChatWithDoctorPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.message !== '') {
            var loader_1 = this.loadingCtrl.create({
                content: 'Lütfen Bekleyiniz...'
            });
            loader_1.present();
            this.postSendMessage(function () {
                _this.refreshMessages();
                loader_1.dismiss();
            });
        }
    };
    ChatWithDoctorPage.prototype.postSendMessage = function (callback) {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("your_id", "10"); // Bunlar geçici.
        formData.append("other_id", "15"); // Bunlar geçici.
        formData.append("content", this.message);
        this.http.post("http://localhost:8000/php/chat-with-doctor.php", formData).subscribe(function response(res) {
            callback();
        });
    };
    ChatWithDoctorPage.prototype.loadMessages = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("your_id", "10"); // Bunlar geçici.
        formData.append("other_id", "15"); // Bunlar geçici.
        this.http.post("http://localhost:8000/php/chat-with-doctor.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    ChatWithDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatWithDoctorPage');
    };
    ChatWithDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-chat-with-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >Sohbet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item no-lines *ngFor="let chat of chats"> <!---burada *ngFor olacak-->\n\n            <div class="chat-message" text-right *ngIf="chat.receiver_id !== \'10\'"> <!-- burasi doktor attiginda sag gider mesaj --> \n\n              <div class="right-bubble">\n\n                <span class="msg-name">Sen</span> <!-- Yani doktor olacak burada -->\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n            <div class="chat-message" text-left *ngIf="chat.receiver_id === \'10\'"> <!-- *ngIf="chat.your_id !== 10" burasi hasta attiginda sola gider --> \n\n              <div class="left-bubble">\n\n                <span class="msg-name">{{chat.your_id}}</span>\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-input type="text" placeholder="Bir mesaj yaz"   name="message" [(ngModel)]="message"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="sendMessage()">\n\n          <ion-icon name="paper-plane"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/,
=======
            selector: 'page-chat-with-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >Sohbet</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item no-lines *ngFor="let chat of chats"> <!---burada *ngFor olacak-->\n\n            <div class="chat-message" text-right *ngIf="chat.receiver_id !== \'10\'"> <!-- burasi doktor attiginda sag gider mesaj --> \n\n              <div class="right-bubble">\n\n                <span class="msg-name">Sen</span> <!-- Yani doktor olacak burada -->\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n            <div class="chat-message" text-left *ngIf="chat.receiver_id === \'10\'"> <!-- *ngIf="chat.your_id !== 10" burasi hasta attiginda sola gider --> \n\n              <div class="left-bubble">\n\n                <span class="msg-name">{{chat.your_id}}</span>\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-input type="text" placeholder="Bir mesaj yaz"   name="message" [(ngModel)]="message"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="sendMessage()">\n\n          <ion-icon name="paper-plane"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ChatWithDoctorPage);
    return ChatWithDoctorPage;
}());

//# sourceMappingURL=chat-with-doctor.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
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
<<<<<<< HEAD
            selector: 'page-simulation',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/simulation/simulation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >3D Simülasyon</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n    <iframe class="iframe" [src]="sanitizer(vid)" frameborder="0"  allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/simulation/simulation.html"*/,
=======
            selector: 'page-simulation',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/simulation/simulation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >3D Simülasyon</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n    <iframe class="iframe" [src]="sanitizer(vid)" frameborder="0"  allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/simulation/simulation.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SimulationPage);
    return SimulationPage;
}());

//# sourceMappingURL=simulation.js.map

/***/ }),

/***/ 203:
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
<<<<<<< HEAD
            selector: 'page-contact',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      İLETİŞİM\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/contact/contact.html"*/
=======
            selector: 'page-contact',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      İLETİŞİM\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/contact/contact.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__ = __webpack_require__(205);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAccountPage = /** @class */ (function () {
    function NewAccountPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    NewAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAccountPage');
    };
    NewAccountPage.prototype.closePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // one time password
    NewAccountPage.prototype.sendSmsOTP = function () {
        var _this = this;
        this.postData(function (json_result) {
            localStorage.setItem("activation", json_result['activation']);
            localStorage.setItem("tel_no", _this.telephone);
            console.log(localStorage.getItem('tel-no'));
            console.log(json_result['activation']);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__["a" /* SmsOtpPage */]);
    };
    NewAccountPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("telephone", this.telephone);
        this.http.post("http://localhost:8000/php/new-account.php", formData).subscribe(function (res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    NewAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-new-account',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/new-account/new-account.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>YENİ HESAP OLUŞTUR</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n         Kapat    \n\n         </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n\n      </ion-card>\n\n\n\n    <ion-item>\n\n        <ion-label style="font-weight: bold;">+90</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="telephone"  placeholder="(111)-111-1111" pattern="06([0-9]{3})-([0-9]{3})-([0-9]{4})"></ion-input> \n\n      </ion-item>\n\n      <br>\n\n      <button ion-button class="button-middle" (click)="sendSmsOTP()">AKTİVASYON KODU GÖNDER</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/new-account/new-account.html"*/,
=======
            selector: 'page-new-account',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/new-account/new-account.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>YENİ HESAP OLUŞTUR</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n         Kapat    \n\n         </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n\n      </ion-card>\n\n\n\n    <ion-item>\n\n        <ion-label style="font-weight: bold;">+90</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="telephone"  placeholder="(111)-111-1111" pattern="06([0-9]{3})-([0-9]{3})-([0-9]{4})"></ion-input> \n\n      </ion-item>\n\n      <br>\n\n      <button ion-button class="button-middle" (click)="sendSmsOTP()">AKTİVASYON KODU GÖNDER</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/new-account/new-account.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], NewAccountPage);
    return NewAccountPage;
}());

//# sourceMappingURL=new-account.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__password_password__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(27);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function SmsOtpPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.activation_user = "";
    }
    SmsOtpPage_1 = SmsOtpPage;
    SmsOtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SmsOtpPage');
    };
    SmsOtpPage.prototype.closePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SmsOtpPage.prototype.completeAppointment = function () {
        var activation = localStorage.getItem("activation");
        if (this.activation_user == activation) {
            localStorage.setItem("activation", "");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__password_password__["a" /* PasswordPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Şifre',
                subTitle: 'Aktivasyon kodunuzu yanlış girdiniz!',
                buttons: ['OK']
            });
            alert_1.present();
            this.activation_user = "";
        }
    };
    SmsOtpPage.prototype.repeatTheSmsOTP = function () {
        var _this = this;
        this.postData(function (json_result) {
            var alert = _this.alertCtrl.create({
                title: 'Şifre',
                subTitle: 'Aktivasyon kodunuz yeniden gönderildi!',
                buttons: ['OK']
            });
            alert.present();
            localStorage.setItem("activation", json_result['activation']);
            console.log(json_result['activation']);
        });
        this.navCtrl.setRoot(SmsOtpPage_1);
    };
    SmsOtpPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("telephone", localStorage.getItem("tel_no"));
        this.http.post("http://localhost:8000/php/new-account.php", formData).subscribe(function (res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    SmsOtpPage = SmsOtpPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-sms-otp',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/sms-otp/sms-otp.html"*/'<!--\n\n  Generated template for the SmsOtpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HESAP AKTİVASYONU </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n         Kapat    \n\n         </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n\n      </ion-card>\n\n      <ion-item>\n\n          <ion-label stacked>SMS ile gelen şifre:<br></ion-label> \n\n          <ion-input type="number" [(ngModel)]="activation_user" placeholder="XXXXXX"></ion-input>\n\n        </ion-item>\n\n        <button ion-button class="button-middle" (click)="completeAppointment()">AKTİVASYONU TAMAMLA</button>\n\n        <button ion-button class="button-middle" (click)="repeatTheSmsOTP()">ŞİFREYİ TEKRAR GÖNDER</button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/sms-otp/sms-otp.html"*/,
=======
            selector: 'page-sms-otp',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/sms-otp/sms-otp.html"*/'<!--\n\n  Generated template for the SmsOtpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HESAP AKTİVASYONU </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n         Kapat    \n\n         </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n\n      </ion-card>\n\n      <ion-item>\n\n          <ion-label stacked>SMS ile gelen şifre:<br></ion-label> \n\n          <ion-input type="number" [(ngModel)]="activation_user" placeholder="XXXXXX"></ion-input>\n\n        </ion-item>\n\n        <button ion-button class="button-middle" (click)="completeAppointment()">AKTİVASYONU TAMAMLA</button>\n\n        <button ion-button class="button-middle" (click)="repeatTheSmsOTP()">ŞİFREYİ TEKRAR GÖNDER</button>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/sms-otp/sms-otp.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SmsOtpPage);
    return SmsOtpPage;
    var SmsOtpPage_1;
}());

//# sourceMappingURL=sms-otp.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_activation_success_activation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
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
    function PasswordPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    PasswordPage.prototype.loginUser = function () {
        // this.postData((json_result) => {
        //
        // });
        localStorage.setItem('password', this.pword);
        console.log(localStorage.getItem('tel_no'));
        console.log(localStorage.getItem('password'));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__success_activation_success_activation__["a" /* SuccessActivationPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-password',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/password/password.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title> Şifre Oluşturma</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> <b style="color:rgb(101, 183, 221);">Şifrenizi Oluşturunuz</b></div>\n\n    </ion-card>\n\n    <form (ngSubmit)="loginUser()">\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n\n          <ion-input type="password" [(ngModel)]=\'pword\' [ngModelOptions]="{standalone: true}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre Onaylayınız:</ion-label>\n\n            <ion-input type="password" [(ngModel)]=\'confirmation_pword\' [ngModelOptions]="{standalone: true}">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n          <p *ngIf="pword != confirmation_pword &&  confirmation_pword " style="font-size: 12px;color: red">\n\n              Şifre onayı asıl şifre ile aynı olmalıdır.\n\n          </p>\n\n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n          <div margin-top>\n\n            <button ion-button block class="button-middle" type="submit" [disabled]="!pword ||\n\n                        !confirmation_pword ||\n\n                        pword != confirmation_pword">\n\n              ONAYLA\n\n            </button>\n\n          </div>\n\n        </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/password/password.html"*/,
=======
            selector: 'page-password',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/password/password.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title> Şifre Oluşturma</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> <b style="color:rgb(101, 183, 221);">Şifrenizi Oluşturunuz</b></div>\n\n      </ion-card>\n\n      <form (ngSubmit)="loginUser()">\n\n\n\n            \n\n      \n\n            <ion-item>\n\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n\n              <ion-input type="password">\n\n              </ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre Onaylayınız:</ion-label>\n\n                <ion-input type="password">\n\n                </ion-input>\n\n              </ion-item>\n\n      \n\n        \n\n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n          <div margin-top>\n\n            <button ion-button block class="button-middle" type="submit">\n\n              ONAYLA\n\n            </button>\n\n          </div>\n\n        </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/password/password.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object])
    ], PasswordPage);
    return PasswordPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__make_appointment_1_make_appointment_1__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(27);
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
<<<<<<< HEAD
            selector: 'page-success-activation',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/success-activation/success-activation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HESAP AKTİVASYONU</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Tebrikler! Aktivasyon işlemleri başarıyla tamamlandı.</div>\n\n      </ion-card>\n\n     \n\n        <button ion-button class="button-middle" (click)="makeappointment()">BAŞLA</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/success-activation/success-activation.html"*/,
=======
            selector: 'page-success-activation',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/success-activation/success-activation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>HESAP AKTİVASYONU</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center><br> Tebrikler! Aktivasyon işlemleri başarıyla tamamlandı.</div>\n\n      </ion-card>\n\n     \n\n        <button ion-button class="button-middle" (click)="makeappointment()">BAŞLA</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/success-activation/success-activation.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], SuccessActivationPage);
    return SuccessActivationPage;
}());

//# sourceMappingURL=success-activation.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__ = __webpack_require__(209);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function MakeAppointment_1Page(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    MakeAppointment_1Page.prototype.ionViewDidLoad = function () {
        console.log('randevu al sayfsındayım');
    };
    MakeAppointment_1Page.prototype.nextStep_1 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */]);
    };
    MakeAppointment_1Page.prototype.postData = function (callback) {
        // Create credentials.
        var json_result;
        var formData = new FormData();
        formData.append("action", "getinfo");
        formData.append("name", this.name);
        formData.append("surname", this.surname);
        formData.append("email", this.email);
        formData.append("gender", this.gender);
        formData.append("city", this.city);
        formData.append("district", this.district);
        this.http.post("http://localhost:8000/php/home.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    MakeAppointment_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-make-appointment-1',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (1/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>Temel Bilgiler<br>Lütfen temel bilgilerinizi eksiksiz bir şekilde doldurunuz.</div>\n\n      </ion-card>\n\n      \n\n\n\n        <ion-item>\n\n          <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" placeholder="Lütfen adınızı yazınız"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soydınız</ion-label>\n\n          <ion-input type="text" [(ngModel)]="surname" placeholder="Lütfen soyadınızı yazınız"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n\n          <ion-input type="email" [(ngModel)]="email" placeholder="Lütfen E-posta adresinizi yazınız"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n\n            <ion-select [(ngModel)]="gender">\n\n              <ion-option value="male">Bay</ion-option>\n\n              <ion-option value="female">Bayan</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n\n            <ion-select [(ngModel)]="city">\n\n              <ion-option value="1">Adana</ion-option>\n\n              <ion-option value="2">Adıyaman</ion-option>\n\n              <ion-option value="3">Afyonkarahisar</ion-option>\n\n              <ion-option value="4">Ağrı</ion-option>\n\n              <ion-option value="5">Amasya</ion-option>\n\n              <ion-option value="6">Ankara</ion-option>\n\n              <ion-option value="7">Antalya</ion-option>\n\n              <ion-option value="8">Artvin</ion-option>\n\n              <ion-option value="9">Aydın</ion-option>\n\n              <ion-option value="10">Balıkesir</ion-option>\n\n              <ion-option value="11">Bilecik</ion-option>\n\n              <ion-option value="12">Bingöl</ion-option>\n\n              <ion-option value="13">Bitlis</ion-option>\n\n              <ion-option value="14">Bolu</ion-option>\n\n              <ion-option value="15">Burdur</ion-option>\n\n              <ion-option value="16">Bursa</ion-option>\n\n              <ion-option value="17">Çanakkale</ion-option>\n\n              <ion-option value="18">Çankırı</ion-option>\n\n              <ion-option value="19">Çorum</ion-option>\n\n              <ion-option value="20">Denizli</ion-option>\n\n              <ion-option value="21">Diyarbakır</ion-option>\n\n              <ion-option value="22">Edirne</ion-option>\n\n              <ion-option value="23">Elazığ</ion-option>\n\n              <ion-option value="24">Erzincan</ion-option>\n\n              <ion-option value="25">Erzurum</ion-option>\n\n              <ion-option value="26">Eskişehir</ion-option>\n\n              <ion-option value="27">Gaziantep</ion-option>\n\n              <ion-option value="28">Giresun</ion-option>\n\n              <ion-option value="29">Gümüşhane</ion-option>\n\n              <ion-option value="30">Hakkâri</ion-option>\n\n              <ion-option value="31">Hatay</ion-option>\n\n              <ion-option value="32">Isparta</ion-option>\n\n              <ion-option value="33">Mersin</ion-option>\n\n              <ion-option value="34">İstanbul</ion-option>\n\n              <ion-option value="35">İzmir</ion-option>\n\n              <ion-option value="36">Kars</ion-option>\n\n              <ion-option value="37">Kastamonu</ion-option>\n\n              <ion-option value="38">Kayseri</ion-option>\n\n              <ion-option value="39">Kırklareli</ion-option>\n\n              <ion-option value="40">Kırşehir</ion-option>\n\n              <ion-option value="41">Kocaeli</ion-option>\n\n              <ion-option value="42">Konya</ion-option>\n\n              <ion-option value="43">Kütahya</ion-option>\n\n              <ion-option value="44">Malatya</ion-option>\n\n              <ion-option value="45">Manisa</ion-option>\n\n              <ion-option value="46">Kahramanmaraş</ion-option>\n\n              <ion-option value="47">Mardin</ion-option>\n\n              <ion-option value="48">Muğla</ion-option>\n\n              <ion-option value="49">Muş</ion-option>\n\n              <ion-option value="50">Nevşehir</ion-option>\n\n              <ion-option value="51">Niğde</ion-option>\n\n              <ion-option value="52">Ordu</ion-option>\n\n              <ion-option value="53">Rize</ion-option>\n\n              <ion-option value="54">Sakarya</ion-option>\n\n              <ion-option value="55">Samsun</ion-option>\n\n              <ion-option value="56">Siirt</ion-option>\n\n              <ion-option value="57">Sinop</ion-option>\n\n              <ion-option value="58">Sivas</ion-option>\n\n              <ion-option value="59">Tekirdağ</ion-option>\n\n              <ion-option value="60">Tokat</ion-option>\n\n              <ion-option value="61">Trabzon</ion-option>\n\n              <ion-option value="62">Tunceli</ion-option>\n\n              <ion-option value="63">Şanlıurfa</ion-option>\n\n              <ion-option value="64">Uşak</ion-option>\n\n              <ion-option value="65">Van</ion-option>\n\n              <ion-option value="66">Yozgat</ion-option>\n\n              <ion-option value="67">Zonguldak</ion-option>\n\n              <ion-option value="68">Aksaray</ion-option>\n\n              <ion-option value="69">Bayburt</ion-option>\n\n              <ion-option value="70">Karaman</ion-option>\n\n              <ion-option value="71">Kırıkkale</ion-option>\n\n              <ion-option value="72">Batman</ion-option>\n\n              <ion-option value="73">Şırnak</ion-option>\n\n              <ion-option value="74">Bartın</ion-option>\n\n              <ion-option value="75">Ardahan</ion-option>\n\n              <ion-option value="76">Iğdır</ion-option>\n\n              <ion-option value="77">Yalova</ion-option>\n\n              <ion-option value="78">Karabük</ion-option>\n\n              <ion-option value="79">Kilis</ion-option>\n\n              <ion-option value="80">Osmaniye</ion-option>\n\n              <ion-option value="81">Düzce</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        \n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n\n          <ion-input type="text" [(ngModel)]="district" placeholder="Lütfen yaşadığınız ilçeyi yazınız"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek İstedikleriniz</ion-label>\n\n          <ion-textarea rows="4" [(ngModel)]="text" autosize placeholder="Eklemek istediğiniz..."></ion-textarea>\n\n        </ion-item>\n\n        <button ion-button class="button-middle" (click)="nextStep_1()">Sonraki Adım</button>\n\n\n\n      \n\n      \n\n\n\n        \n\n        \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/,
=======
            selector: 'page-make-appointment-1',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (1/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>Temel Bilgiler<br>Lütfen temel bilgilerinizi eksiksiz bir şekilde doldurunuz.</div>\n\n      </ion-card>\n\n      \n\n\n\n        <ion-item>\n\n          <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" placeholder="Lütfen adınızı yazınız"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soydınız</ion-label>\n\n          <ion-input type="text" [(ngModel)]="surname" placeholder="Lütfen soyadınızı yazınız"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n\n          <ion-input type="email" [(ngModel)]="email" placeholder="Lütfen E-posta adresinizi yazınız"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n\n            <ion-select [(ngModel)]="gender">\n\n              <ion-option value="male">Bay</ion-option>\n\n              <ion-option value="female">Bayan</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n\n            <ion-select [(ngModel)]="city">\n\n              <ion-option value="1">Adana</ion-option>\n\n              <ion-option value="2">Adıyaman</ion-option>\n\n              <ion-option value="3">Afyonkarahisar</ion-option>\n\n              <ion-option value="4">Ağrı</ion-option>\n\n              <ion-option value="5">Amasya</ion-option>\n\n              <ion-option value="6">Ankara</ion-option>\n\n              <ion-option value="7">Antalya</ion-option>\n\n              <ion-option value="8">Artvin</ion-option>\n\n              <ion-option value="9">Aydın</ion-option>\n\n              <ion-option value="10">Balıkesir</ion-option>\n\n              <ion-option value="11">Bilecik</ion-option>\n\n              <ion-option value="12">Bingöl</ion-option>\n\n              <ion-option value="13">Bitlis</ion-option>\n\n              <ion-option value="14">Bolu</ion-option>\n\n              <ion-option value="15">Burdur</ion-option>\n\n              <ion-option value="16">Bursa</ion-option>\n\n              <ion-option value="17">Çanakkale</ion-option>\n\n              <ion-option value="18">Çankırı</ion-option>\n\n              <ion-option value="19">Çorum</ion-option>\n\n              <ion-option value="20">Denizli</ion-option>\n\n              <ion-option value="21">Diyarbakır</ion-option>\n\n              <ion-option value="22">Edirne</ion-option>\n\n              <ion-option value="23">Elazığ</ion-option>\n\n              <ion-option value="24">Erzincan</ion-option>\n\n              <ion-option value="25">Erzurum</ion-option>\n\n              <ion-option value="26">Eskişehir</ion-option>\n\n              <ion-option value="27">Gaziantep</ion-option>\n\n              <ion-option value="28">Giresun</ion-option>\n\n              <ion-option value="29">Gümüşhane</ion-option>\n\n              <ion-option value="30">Hakkâri</ion-option>\n\n              <ion-option value="31">Hatay</ion-option>\n\n              <ion-option value="32">Isparta</ion-option>\n\n              <ion-option value="33">Mersin</ion-option>\n\n              <ion-option value="34">İstanbul</ion-option>\n\n              <ion-option value="35">İzmir</ion-option>\n\n              <ion-option value="36">Kars</ion-option>\n\n              <ion-option value="37">Kastamonu</ion-option>\n\n              <ion-option value="38">Kayseri</ion-option>\n\n              <ion-option value="39">Kırklareli</ion-option>\n\n              <ion-option value="40">Kırşehir</ion-option>\n\n              <ion-option value="41">Kocaeli</ion-option>\n\n              <ion-option value="42">Konya</ion-option>\n\n              <ion-option value="43">Kütahya</ion-option>\n\n              <ion-option value="44">Malatya</ion-option>\n\n              <ion-option value="45">Manisa</ion-option>\n\n              <ion-option value="46">Kahramanmaraş</ion-option>\n\n              <ion-option value="47">Mardin</ion-option>\n\n              <ion-option value="48">Muğla</ion-option>\n\n              <ion-option value="49">Muş</ion-option>\n\n              <ion-option value="50">Nevşehir</ion-option>\n\n              <ion-option value="51">Niğde</ion-option>\n\n              <ion-option value="52">Ordu</ion-option>\n\n              <ion-option value="53">Rize</ion-option>\n\n              <ion-option value="54">Sakarya</ion-option>\n\n              <ion-option value="55">Samsun</ion-option>\n\n              <ion-option value="56">Siirt</ion-option>\n\n              <ion-option value="57">Sinop</ion-option>\n\n              <ion-option value="58">Sivas</ion-option>\n\n              <ion-option value="59">Tekirdağ</ion-option>\n\n              <ion-option value="60">Tokat</ion-option>\n\n              <ion-option value="61">Trabzon</ion-option>\n\n              <ion-option value="62">Tunceli</ion-option>\n\n              <ion-option value="63">Şanlıurfa</ion-option>\n\n              <ion-option value="64">Uşak</ion-option>\n\n              <ion-option value="65">Van</ion-option>\n\n              <ion-option value="66">Yozgat</ion-option>\n\n              <ion-option value="67">Zonguldak</ion-option>\n\n              <ion-option value="68">Aksaray</ion-option>\n\n              <ion-option value="69">Bayburt</ion-option>\n\n              <ion-option value="70">Karaman</ion-option>\n\n              <ion-option value="71">Kırıkkale</ion-option>\n\n              <ion-option value="72">Batman</ion-option>\n\n              <ion-option value="73">Şırnak</ion-option>\n\n              <ion-option value="74">Bartın</ion-option>\n\n              <ion-option value="75">Ardahan</ion-option>\n\n              <ion-option value="76">Iğdır</ion-option>\n\n              <ion-option value="77">Yalova</ion-option>\n\n              <ion-option value="78">Karabük</ion-option>\n\n              <ion-option value="79">Kilis</ion-option>\n\n              <ion-option value="80">Osmaniye</ion-option>\n\n              <ion-option value="81">Düzce</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        \n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n\n          <ion-input type="text" [(ngModel)]="district" placeholder="Lütfen yaşadığınız ilçeyi yazınız"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek İstedikleriniz</ion-label>\n\n          <ion-textarea rows="4" [(ngModel)]="text" autosize placeholder="Eklemek istediğiniz..."></ion-textarea>\n\n        </ion-item>\n\n        <button ion-button class="button-middle" (click)="nextStep_1()">Sonraki Adım</button>\n\n\n\n      \n\n      \n\n\n\n        \n\n        \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MakeAppointment_1Page);
    return MakeAppointment_1Page;
}());

//# sourceMappingURL=make-appointment-1.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_3_make_appointment_3__ = __webpack_require__(211);
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
<<<<<<< HEAD
            selector: 'page-make-appointment-2',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/'<!--\n\n  Generated template for the MakeAppointment_2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (2/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br><h1 class="h1">FOTOĞRAF YÜKLEME</h1><br>Lütfen aşağıda belirtildiği gibi fotoğraflarınızı çekip yükleyiniz</div>\n\n      </ion-card>  <br><br>\n\n      <h5 class="h5">1. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">2. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">3. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                    <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()" >3. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">4. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                     <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">5. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n\n        <br><br><br><br>\n\n        <button ion-button class="button-nextStep" (click)="nextStep_2()">SONRAKİ ADIM</button>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/,
=======
            selector: 'page-make-appointment-2',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/'<!--\n\n  Generated template for the MakeAppointment_2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (2/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br><h1 class="h1">FOTOĞRAF YÜKLEME</h1><br>Lütfen aşağıda belirtildiği gibi fotoğraflarınızı çekip yükleyiniz</div>\n\n      </ion-card>  <br><br>\n\n      <h5 class="h5">1. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">2. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">3. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                    <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()" >3. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">4. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                  <ion-avatar >\n\n                     <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n\n        <br><br>\n\n        <h5 class="h5">5. FOTOĞRAF EKLE</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/apple.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding> \n\n              <ion-card>\n\n                <ion-avatar >\n\n                   <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                </ion-avatar>\n\n              </ion-card>   \n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n\n        <br><br><br><br>\n\n        <button ion-button class="button-nextStep" (click)="nextStep_2()">SONRAKİ ADIM</button>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], MakeAppointment_2Page);
    return MakeAppointment_2Page;
}());

//# sourceMappingURL=make-appointment-2.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_4_make_appointment_4__ = __webpack_require__(212);
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
<<<<<<< HEAD
            selector: 'page-make-appointment-3',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/'<!--\n\n  Generated template for the MakeAppointment_3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (3/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>\n\n          <h1 class="h1">BİLGİLERİNİZİ KONTROL EDİNİZ </h1>\n\n        <br>Lütfen bilgilerinizi son bir kez daha kontrol ediniz ve gönderiniz</div>\n\n    </ion-card><br><br>\n\n    \n\n    \n\n        <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n\n        <h5>Muratcan</h5>\n\n    \n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221); ">Soyadınız</ion-label>\n\n        <h5>Kılıç</h5>\n\n      \n\n      \n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n\n        <h5>murat34@gmail.com</h5>\n\n      \n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n\n        <h5>Bay</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n\n        <h5>İstanbul</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n\n        <h5>Kadıköy</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek istediğniz</ion-label>\n\n        <h5>Teknopark indiriminden yaralanmak istiyorum.</h5>\n\n\n\n        <h5 class="h5">1. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">2. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">3. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">3. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">4. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                      <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                   </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">5. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                       <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n\n          <br><br><br><br>\n\n          <button ion-button class="button-edit-information">BİLİGİLERİMİ DÜZENLE</button>\n\n          <br>\n\n          <button ion-button class="button-edit-information" (click)="create_appointment()">RANDEVUYU OLUŞTUR</button>\n\n\n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/,
=======
            selector: 'page-make-appointment-3',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/'<!--\n\n  Generated template for the MakeAppointment_3Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (3/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>\n\n          <h1 class="h1">BİLGİLERİNİZİ KONTROL EDİNİZ </h1>\n\n        <br>Lütfen bilgilerinizi son bir kez daha kontrol ediniz ve gönderiniz</div>\n\n    </ion-card><br><br>\n\n    \n\n    \n\n        <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n\n        <h5>Muratcan</h5>\n\n    \n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221); ">Soyadınız</ion-label>\n\n        <h5>Kılıç</h5>\n\n      \n\n      \n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n\n        <h5>murat34@gmail.com</h5>\n\n      \n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n\n        <h5>Bay</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n\n        <h5>İstanbul</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n\n        <h5>Kadıköy</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek istediğniz</ion-label>\n\n        <h5>Teknopark indiriminden yaralanmak istiyorum.</h5>\n\n\n\n        <h5 class="h5">1. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">1. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">2. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">2. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">3. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">3. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">4. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                      <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                   </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">4. FOTOĞRAF EKLE</button>\n\n          <br><br>\n\n          <h5 class="h5">5. FOTOĞRAF </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/apple.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding> \n\n                <ion-card>\n\n                    <ion-avatar >\n\n                       <img [src]="chosenPicture || placeholder" onerror="this.src=\'/assets/imgs/apple.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>   \n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture()">5. FOTOĞRAF EKLE</button>\n\n          <br><br><br><br>\n\n          <button ion-button class="button-edit-information">BİLİGİLERİMİ DÜZENLE</button>\n\n          <br>\n\n          <button ion-button class="button-edit-information" (click)="create_appointment()">RANDEVUYU OLUŞTUR</button>\n\n\n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], MakeAppointment_3Page);
    return MakeAppointment_3Page;
}());

//# sourceMappingURL=make-appointment-3.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointments_appointments__ = __webpack_require__(103);
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
<<<<<<< HEAD
            selector: 'page-make-appointment-4',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/'<!--\n\n  Generated template for the MakeAppointment_4Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (4/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center> <br>TEBRİKLER<br>Randevunuz başarılı bir şeklide oluşturulmuştur. </div>\n\n      </ion-card>\n\n      <br><br>\n\n      <button ion-button class="button-middle" (click)="appointments()">Randevularıma Git</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/,
=======
            selector: 'page-make-appointment-4',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/'<!--\n\n  Generated template for the MakeAppointment_4Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>RANDEVU AL (4/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center> <br>TEBRİKLER<br>Randevunuz başarılı bir şeklide oluşturulmuştur. </div>\n\n      </ion-card>\n\n      <br><br>\n\n      <button ion-button class="button-middle" (click)="appointments()">Randevularıma Git</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], MakeAppointment_4Page);
    return MakeAppointment_4Page;
}());

//# sourceMappingURL=make-appointment-4.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function LoginUserPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.user_data = "";
        this.pass_data = "";
        this.warning_user = "";
        this.warning_pass = "";
    }
    LoginUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginUserPage');
    };
    // Callback functions control asynchronous methods.
    LoginUserPage.prototype.postData = function (callback) {
        // Create credentials.
        var formData = new FormData();
        formData.append("action", "authenticate");
        formData.append("username", this.user_data);
        formData.append("password", this.pass_data);
        var json_result;
        this.http.post("http://localhost:8000/php/login-user.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    // LOGIN FUNCTION
    LoginUserPage.prototype.userLogin = function () {
        var _this = this;
        // Check if username (telephone number) is empty or not.
        if (!this.user_data) {
            this.warning_user = "Kullanıcı adı boş bırakılamaz.";
        }
        else
            this.warning_user = "";
        // Check if password is empty or not.
        if (!this.pass_data) {
            this.warning_pass = "Şifre boş bırakılamaz.";
        }
        else
            this.warning_pass = "";
        // Check whether all credentials are valid or not.
        if (this.user_data && this.pass_data) {
            var loader_1 = this.loadingCtrl.create({
                content: 'Lütfen Bekleyiniz...'
            });
            loader_1.present();
            this.postData(function (json_result) {
                loader_1.dismiss();
                // Check if database query is valid or not.
                if (json_result['message'] == 'error') {
                    _this.warning_user = "Kullanıcı adı veya şifre yanlış.";
                    console.log(_this.warning_user);
                }
                else {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('name', json_result['name']);
                    localStorage.setItem('surname', json_result['surname']);
                    localStorage.setItem('username', json_result['username']);
                    localStorage.setItem('authority', json_result['user_authority']);
                    localStorage.setItem("id", json_result['id']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]); // After the authentication is complete, redirect to the main page.
                }
            });
        }
    };
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-login-user',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/login-user/login-user.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>ÜYE GİRİŞİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n      <ion-card class="card-parent">\n\n          <img src="/assets/imgs/clearfix.png"/>\n\n          <div class="card-title" text-center><br> <b> Giriş Yapınız</b></div>\n\n        </ion-card>\n\n\n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Telefon:</ion-label>\n\n                <ion-input [(ngModel)]="user_data" type="text" >\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_user}}</ion-label>\n\n              </ion-item>\n\n        \n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n\n                <ion-input [(ngModel)]="pass_data" type="password">\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_pass}}</ion-label>\n\n              </ion-item>\n\n        \n\n          \n\n            <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n            <div margin-top>\n\n              <button (click)="userLogin()" ion-button block class="button-middle" type="submit">\n\n                GİRİŞ YAP\n\n              </button>\n\n            </div>\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/login-user/login-user.html"*/,
=======
            selector: 'page-login-user',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/login-user/login-user.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>ÜYE GİRİŞİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n      <ion-card class="card-parent">\n\n          <img src="/assets/imgs/clearfix.png"/>\n\n          <div class="card-title" text-center><br> <b> Giriş Yapınız</b></div>\n\n        </ion-card>\n\n\n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Telefon:</ion-label>\n\n                <ion-input [(ngModel)]="user_data" type="text" >\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_user}}</ion-label>\n\n              </ion-item>\n\n        \n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre:</ion-label>\n\n                <ion-input [(ngModel)]="pass_data" type="password">\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_pass}}</ion-label>\n\n              </ion-item>\n\n        \n\n          \n\n            <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n            <div margin-top>\n\n              <button (click)="userLogin()" ion-button block class="button-middle" type="submit">\n\n                GİRİŞ YAP\n\n              </button>\n\n            </div>\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/login-user/login-user.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], LoginUserPage);
    return LoginUserPage;
}());

//# sourceMappingURL=login-user.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(27);
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
    function RegisterDoctorPage(navCtrl, navParams, loadingCtrl, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    RegisterDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterDoctorPage');
    };
    // Callback functions control asynchronous methods.
    RegisterDoctorPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "signup");
        formData.append("uname", this.uname);
        formData.append("pword", this.pword);
        formData.append("email", this.email);
        formData.append("name", this.name);
        var json_result;
        this.http.post("http://localhost:8000/php/signup-doctor.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    RegisterDoctorPage.prototype.register = function () {
        var _this = this;
        console.log('Bana tikladin register');
        var loader = this.loadingCtrl.create({
            content: 'Lütfen Bekleyiniz...'
        });
        loader.present();
        this.postData(function (json_result) {
            loader.dismiss();
            // Check if database query is valid or not.
            if (json_result['message'] == 'Error') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'HATA!',
                    subTitle: 'Bir şeyler yanlış gitti. Lütfen yeniden deneyiniz!',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.name = "";
                _this.uname = "";
                _this.email = "";
                _this.pword = "";
                _this.confirmation_pword = "";
            }
            else {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('name', json_result['name']);
                // localStorage.setItem('surname', json_result['surname']);
                localStorage.setItem('username', json_result['uname']);
                localStorage.setItem('authority', '1');
                // localStorage.setItem("id", json_result['id']);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); // After the authentication is complete, redirect to the main page.
            }
        });
    };
    RegisterDoctorPage.prototype.login = function () {
        console.log("tıkladı");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    RegisterDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-register-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/register-doctor/register-doctor.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="tabColor">\n\n        <ion-title text-center>HEKİM KAYIT</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding="padding">\n\n        <!--logo-->\n\n        <div padding text-center="text-center">\n\n            <div class="logo primary-bg">\n\n                <img src="/assets/imgs/clearfix.png"/>\n\n            </div>\n\n            <h5 style="font-weight: bold; color:rgb(101, 183, 221);">Lütfen formu eksiksiz doldurunuz. Sadece Diş Hekimleri uygulamaya kayıt yapabilir.</h5>\n\n        </div>\n\n        <!-- Login form -->\n\n        <ion-list class="list-form list-no-border">\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Tam Adınız</ion-label>\n\n                <ion-input type="text" [(ngModel)]="name" required="required"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Kullanıcı Adı</ion-label>\n\n                <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n\n                <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreniz</ion-label>\n\n                <ion-input type="password" [(ngModel)]="pword"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreyi onayla</ion-label>\n\n                <ion-input type="password" [(ngModel)]="confirmation_pword"></ion-input>\n\n\n\n            </ion-item>\n\n            <p *ngIf="pword != confirmation_pword &&  confirmation_pword " style="font-size: 12px;color: red">\n\n\n\n                Şifre onayı asıl şifre ile aynı olmalıdır.\n\n            </p>\n\n        </ion-list>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n        <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label >Lisanslı Diş Hekimi olduğumu onaylıyorum.\n\n        </ion-label>\n\n\n\n        <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label>Beyan ettiğim bilgilerin doğruluğunu ve<br>\n\n            <a>Clearfix</a>\n\n            üyelik kural ve koşullarını kabul <br>ediyorum.</ion-label>\n\n\n\n        <div margin-top="margin-top">\n\n            <button ion-button block class="button-middle" (click)="register()" [disabled]="!name || !uname || !email || !pword || !confirmation_pword ||           pword != confirmation_pword   ">\n\n                Kaydol\n\n            </button>\n\n        </div>\n\n\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n            <span ion-text (click)="login()">Hesabın var mı?</span>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/register-doctor/register-doctor.html"*/,
=======
            selector: 'page-register-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/register-doctor/register-doctor.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="tabColor">\n\n        <ion-title text-center>HEKİM KAYIT</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding="padding">\n\n        <!--logo-->\n\n        <div padding text-center="text-center">\n\n            <div class="logo primary-bg">\n\n                <img src="/assets/imgs/clearfix.png"/>\n\n            </div>\n\n            <h5 style="font-weight: bold; color:rgb(101, 183, 221);">Lütfen formu eksiksiz doldurunuz. Sadece Diş Hekimleri uygulamaya kayıt yapabilir.</h5>\n\n        </div>\n\n        <!-- Login form -->\n\n        <ion-list class="list-form list-no-border">\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Tam Adınız</ion-label>\n\n                <ion-input type="text" [(ngModel)]="name" required="required"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Kullanıcı Adı</ion-label>\n\n                <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n\n                <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreniz</ion-label>\n\n                <ion-input type="password" [(ngModel)]="pword"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreyi onayla</ion-label>\n\n                <ion-input type="password" [(ngModel)]="confirmation_pword"></ion-input>\n\n\n\n            </ion-item>\n\n            <p *ngIf="pword != confirmation_pword &&  confirmation_pword " style="font-size: 12px;color: red">\n\n\n\n                Şifre onayı asıl şifre ile aynı olmalıdır.\n\n            </p>\n\n        </ion-list>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n        <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label >Lisanslı Diş Hekimi olduğumu onaylıyorum.\n\n        </ion-label>\n\n\n\n        <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label>Beyan ettiğim bilgilerin doğruluğunu ve<br>\n\n            <a>Clearfix</a>\n\n            üyelik kural ve koşullarını kabul <br>ediyorum.</ion-label>\n\n\n\n        <div margin-top="margin-top">\n\n            <button ion-button block class="button-middle" (click)="register()" [disabled]="!name || !uname || !email || !pword || !confirmation_pword ||           pword != confirmation_pword   ">\n\n                Kaydol\n\n            </button>\n\n        </div>\n\n\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n            <span ion-text (click)="login()">Hesabın var mı?</span>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/register-doctor/register-doctor.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RegisterDoctorPage);
    return RegisterDoctorPage;
}());

//# sourceMappingURL=register-doctor.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_list_id_list__ = __webpack_require__(216);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function CategoryPage(navCtrl, navParams, loadingCtrl, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rows = [];
        var loader = this.loadingCtrl.create({
            content: 'Lütfen Bekleyiniz...'
        });
        loader.present();
        this.postData(function (json_result) {
            loader.dismiss();
            for (var i = 0; i < 10; i++)
                _this.rows[i] = json_result['row' + i];
        });
    }
    CategoryPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("id", localStorage.getItem("id"));
        this.http.post("http://localhost:8000/php/category.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.userList = function (val) {
        localStorage.setItem("category", val);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__id_list_id_list__["a" /* IdListPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-category',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/category/category.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>Kategori</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid >\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            \n\n           <ion-card class="cardColor" (click)="userList(0)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="list-box" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center><b class="bfont">Tüm Vakalar</b></h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[0]}}</b></h1>\n\n              </div>\n\n           </ion-card>\n\n\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card class="cardColor" (click)="userList(1)">\n\n                <div class="divIcon">\n\n                    <ion-icon name="custom-ruler" color="tabColor"></ion-icon>\n\n                </div>\n\n                <div>\n\n                  <h3 text-center><b class="bfont">Ölçüler</b></h3>\n\n                </div>\n\n                <div>\n\n                  <br>\n\n                  <h1 text-center><b>{{rows[1]}}</b></h1>\n\n                </div>\n\n             </ion-card> \n\n      </ion-col >\n\n      <ion-col col-6>\n\n          <ion-card class="cardColor" (click)="userList(2)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="qr-scanner" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center><b class="bfont">Tarama</b></h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[2]}}</b></h1>\n\n              </div>\n\n           </ion-card> \n\n    </ion-col >\n\n    <ion-col col-6>\n\n        <ion-card class="cardColor" (click)="userList(3)">\n\n            <div class="divIcon">\n\n                <ion-icon name="custom-register" color="tabColor"></ion-icon>\n\n                \n\n            </div>\n\n            <div>\n\n              <h3 text-center><b class="bfont">Kayıt</b></h3>\n\n            </div>\n\n            <div>\n\n              <br>\n\n              <h1 text-center><b>{{rows[3]}}</b></h1>\n\n            </div>\n\n         </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(4)">\n\n          <div class="divIcon">\n\n              <ion-icon name="cog" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Set-Up</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[4]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(5)">\n\n          <div class="divIcon">\n\n              <ion-icon name="custom-plan" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Planlama</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[5]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(6)">\n\n          <div class="divIcon">\n\n              <ion-icon name="log-out" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Export</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[6]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(7)">\n\n          <div class="divIcon">\n\n              <ion-icon name="color-fill" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">P.Ç.T</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[7]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n    <ion-card class="cardColor" (click)="userList(8)">\n\n        <div class="divIcon">\n\n            <ion-icon name="custom-truck" color="tabColor"></ion-icon>\n\n        </div>\n\n        <div>\n\n          <h3 text-center><b class="bfont">Kargoda</b></h3>\n\n        </div>\n\n        <div>\n\n          <br>\n\n          <h1 text-center><b>{{rows[8]}}</b></h1>\n\n        </div>\n\n     </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(9)">\n\n          <div class="divIcon">\n\n              <ion-icon name="checkbox" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Tamamlanmış</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[9]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n    </ion-col >\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/category/category.html"*/,
=======
            selector: 'page-category',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/category/category.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>Kategori</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid >\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            \n\n           <ion-card class="cardColor" (click)="userList(0)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="list-box" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center><b class="bfont">Tüm Vakalar</b></h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[0]}}</b></h1>\n\n              </div>\n\n           </ion-card>\n\n\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card class="cardColor" (click)="userList(1)">\n\n                <div class="divIcon">\n\n                    <ion-icon name="custom-ruler" color="tabColor"></ion-icon>\n\n                </div>\n\n                <div>\n\n                  <h3 text-center><b class="bfont">Ölçüler</b></h3>\n\n                </div>\n\n                <div>\n\n                  <br>\n\n                  <h1 text-center><b>{{rows[1]}}</b></h1>\n\n                </div>\n\n             </ion-card> \n\n      </ion-col >\n\n      <ion-col col-6>\n\n          <ion-card class="cardColor" (click)="userList(2)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="qr-scanner" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center><b class="bfont">Tarama</b></h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[2]}}</b></h1>\n\n              </div>\n\n           </ion-card> \n\n    </ion-col >\n\n    <ion-col col-6>\n\n        <ion-card class="cardColor" (click)="userList(3)">\n\n            <div class="divIcon">\n\n                <ion-icon name="custom-register" color="tabColor"></ion-icon>\n\n                \n\n            </div>\n\n            <div>\n\n              <h3 text-center><b class="bfont">Kayıt</b></h3>\n\n            </div>\n\n            <div>\n\n              <br>\n\n              <h1 text-center><b>{{rows[3]}}</b></h1>\n\n            </div>\n\n         </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(4)">\n\n          <div class="divIcon">\n\n              <ion-icon name="cog" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Set-Up</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[4]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(5)">\n\n          <div class="divIcon">\n\n              <ion-icon name="custom-plan" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Planlama</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[5]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(6)">\n\n          <div class="divIcon">\n\n              <ion-icon name="log-out" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Export</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[6]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(7)">\n\n          <div class="divIcon">\n\n              <ion-icon name="color-fill" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">P.Ç.T</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[7]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n    <ion-card class="cardColor" (click)="userList(8)">\n\n        <div class="divIcon">\n\n            <ion-icon name="custom-truck" color="tabColor"></ion-icon>\n\n        </div>\n\n        <div>\n\n          <h3 text-center><b class="bfont">Kargoda</b></h3>\n\n        </div>\n\n        <div>\n\n          <br>\n\n          <h1 text-center><b>{{rows[8]}}</b></h1>\n\n        </div>\n\n     </ion-card> \n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(9)">\n\n          <div class="divIcon">\n\n              <ion-icon name="checkbox" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Tamamlanmış</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[9]}}</b></h1>\n\n          </div>\n\n       </ion-card> \n\n    </ion-col >\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/category/category.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_list_ticket_list__ = __webpack_require__(217);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
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
    function IdListPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        var loader = this.loadingCtrl.create({
            content: 'Lütfen Bekleyiniz...'
        });
        loader.present();
        this.postData(function (json_result) {
            loader.dismiss();
            _this.tickets = json_result;
        });
    }
    IdListPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("category", localStorage.getItem("category"));
        formData.append("id", localStorage.getItem("id"));
        this.http.post("http://localhost:8000/php/id-list.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    IdListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdListPage');
    };
    IdListPage.prototype.ticket_send = function (ticket) {
        localStorage.setItem("ticketJSON", JSON.stringify(ticket));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ticket_list_ticket_list__["a" /* TicketListPage */]);
    };
    IdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-id-list',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/id-list/id-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>Hasta listesi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <div>\n\n     <ion-searchbar (ionInput)="getItems($event)" placeholder="Ara"></ion-searchbar> \n\n  </div> -->\n\n    <ion-card no-padding style="box-shadow: none;">\n\n        <ion-card-content>\n\n            <b style="font-size:25px; color:rgb(101, 183, 221);">Hasta listesi</b>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    \n\n      <ion-card *ngFor="let ticket of tickets" (click)="ticket_send(ticket)">\n\n          <ion-card-header>\n\n            <b> {{ticket.id}}: {{ticket.subject}} </b>\n\n          </ion-card-header>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/id-list/id-list.html"*/,
=======
            selector: 'page-id-list',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/id-list/id-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>Hasta listesi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <div>\n\n     <ion-searchbar (ionInput)="getItems($event)" placeholder="Ara"></ion-searchbar> \n\n  </div> -->\n\n    <ion-card no-padding style="box-shadow: none;">\n\n        <ion-card-content>\n\n            <b style="font-size:25px; color:rgb(101, 183, 221);">Hasta listesi</b>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    \n\n      <ion-card *ngFor="let ticket of tickets" (click)="ticket_send(ticket)">\n\n          <ion-card-header>\n\n            <b> {{ticket.id}}: {{ticket.subject}} </b>\n\n          </ion-card-header>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/id-list/id-list.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], IdListPage);
    return IdListPage;
}());

//# sourceMappingURL=id-list.js.map

/***/ }),

/***/ 217:
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
        this.ticket = JSON.parse(localStorage.getItem("ticketJSON"));
        switch (this.ticket['step']) {
            case '0':
                this.ticket['step'] = 'Ölçüler';
                break;
            case '1':
                this.ticket['step'] = 'Tarama';
                break;
            case '2':
                this.ticket['step'] = 'Kayıt';
                break;
            case '3':
                this.ticket['step'] = 'Set-Up';
                break;
            case '4':
                this.ticket['step'] = 'Planlama';
                break;
            case '5':
                this.ticket['step'] = 'Export';
                break;
            case '6':
                this.ticket['step'] = 'P. Ç. T.';
                break;
            case '7':
                this.ticket['step'] = 'Kargoda';
                break;
            case '8':
                this.ticket['step'] = 'Tamamlandı';
                break;
        }
        switch (this.ticket['cat_id']) {
            case '1':
                this.ticket['cat_id'] = 'robofix/lingual';
                break;
            case '2':
                this.ticket['cat_id'] = 'clearfix';
                break;
            case '6':
                this.ticket['cat_id'] = 'robofix/labial';
                break;
            case '7':
                this.ticket['cat_id'] = 'transfer-fix';
                break;
            case '8':
                this.ticket['cat_id'] = 'formule22';
                break;
            case '9':
                this.ticket['cat_id'] = 'Tamamlandı';
                break;
        }
    }
    TicketListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketListPage');
    };
    TicketListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-ticket-list',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/ticket-list/ticket-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >TİCKET LİSTESİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  \n\n  <ion-grid>\n\n\n\n    <ion-row center>\n\n      <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n              ID\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n             <b style="font-size:20px;">{{ticket.id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-col>\n\n      <ion-col col-6 no-padding> \n\n          <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Öncelik\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-badge color="danger" style="font-size:18px;">{{ticket.priority}}</ion-badge>\n\n            </ion-card-content>\n\n          </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n          <ion-card-header style="font-size:20px;">\n\n              Konu\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <b style="font-size:18px;">{{ticket.subject}}</b>\n\n          </ion-card-content>\n\n        </ion-card>   \n\n  </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Kategori\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.cat_id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Oluşturuldu\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.create_time | date: short}}</b>\n\n            </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n        <ion-card-header style="font-size:20px;">\n\n            Güncellendi\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <b style="font-size:16px;">{{ticket.update_time | date: short}}</b>\n\n        </ion-card-content>\n\n        </ion-card>   \n\n   </ion-col>\n\n   <ion-col col-6 no-padding> \n\n      <ion-card text-center class="cardColor">\n\n      <ion-card-header style="font-size:20px;">\n\n          Adım\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-badge color="secondary" style="font-size:18px;">{{ticket.step}}</ion-badge>\n\n      </ion-card-content>\n\n      </ion-card>   \n\n     </ion-col>\n\n      </ion-row>\n\n    </ion-grid>   \n\n     \n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/ticket-list/ticket-list.html"*/,
=======
            selector: 'page-ticket-list',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/ticket-list/ticket-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >TİCKET LİSTESİ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  \n\n  <ion-grid>\n\n\n\n    <ion-row center>\n\n      <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n              ID\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n             <b style="font-size:20px;">{{ticket.id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-col>\n\n      <ion-col col-6 no-padding> \n\n          <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Öncelik\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-badge color="danger" style="font-size:18px;">{{ticket.priority}}</ion-badge>\n\n            </ion-card-content>\n\n          </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n          <ion-card-header style="font-size:20px;">\n\n              Konu\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <b style="font-size:18px;">{{ticket.subject}}</b>\n\n          </ion-card-content>\n\n        </ion-card>   \n\n  </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Kategori\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.cat_id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                Oluşturuldu\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.create_time | date: short}}</b>\n\n            </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>\n\n    <ion-col col-6 no-padding> \n\n        <ion-card text-center class="cardColor">\n\n        <ion-card-header style="font-size:20px;">\n\n            Güncellendi\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <b style="font-size:16px;">{{ticket.update_time | date: short}}</b>\n\n        </ion-card-content>\n\n        </ion-card>   \n\n   </ion-col>\n\n   <ion-col col-6 no-padding> \n\n      <ion-card text-center class="cardColor">\n\n      <ion-card-header style="font-size:20px;">\n\n          Adım\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-badge color="secondary" style="font-size:18px;">{{ticket.step}}</ion-badge>\n\n      </ion-card-content>\n\n      </ion-card>   \n\n     </ion-col>\n\n      </ion-row>\n\n    </ion-grid>   \n\n     \n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/ticket-list/ticket-list.html"*/,
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TicketListPage);
    return TicketListPage;
}());

//# sourceMappingURL=ticket-list.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(284);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_appointments_appointments__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_account_new_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sms_otp_sms_otp__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_doctor_login_doctor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_doctor_register_doctor__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_user_login_user__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_ticket_list_ticket_list__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_timer_timer__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_simulation_simulation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_category_category__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_password_password__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_with_doctor_chat_with_doctor__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_success_activation_success_activation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_1_make_appointment_1__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_2_make_appointment_2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_3_make_appointment_3__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_4_make_appointment_4__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_id_list_id_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_providers_camera_provider__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Cordova


// import pages

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__app_providers_camera_provider__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_account_new_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_user_login_user__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__ = __webpack_require__(104);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(215);
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
    function HomePage(navCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // Define the undefined values.
        if (!localStorage.getItem('isLoggedIn'))
            localStorage.setItem('isLoggedIn', 'false');
        if (!localStorage.getItem('name'))
            localStorage.setItem('name', '');
        if (!localStorage.getItem('surname'))
            localStorage.setItem('surname', '');
        if (!localStorage.getItem('user_authority'))
            localStorage.setItem('user_authority', '');
        if (!localStorage.getItem('username'))
            localStorage.setItem('username', '');
        if (!localStorage.getItem('id'))
            localStorage.setItem('id', '');
        this.accountCheck();
        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('surname'));
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('id'));
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goToCategories = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.newAccount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__new_account_new_account__["a" /* NewAccountPage */]);
    };
    HomePage.prototype.loginUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_user_login_user__["a" /* LoginUserPage */]);
    };
    HomePage.prototype.logoutUser = function () {
        var _this = this;
        this.postData(function () {
            _this.account = false;
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.setItem('name', '');
            localStorage.setItem('username', '');
            localStorage.setItem('authority', '');
            localStorage.setItem('surname', '');
            localStorage.setItem('id', '');
            _this.navCtrl.setRoot(HomePage_1);
        }, "logout");
    };
    HomePage.prototype.loginDoctor = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    HomePage.prototype.accountCheck = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Lütfen Bekleyiniz...'
        });
        loader.present();
        this.postData(function (json_result) {
            loader.dismiss();
            if (json_result['message'] == 'not_logged_in') {
                _this.account = false;
            }
            else {
                _this.account = true;
                _this.name = localStorage.getItem("name");
                _this.surname = localStorage.getItem("surname");
                _this.authority = localStorage.getItem("authority");
            }
            console.log(json_result);
        }, "check");
    };
    HomePage.prototype.postData = function (callback, action) {
        // Create credentials.
        var json_result;
        var formData = new FormData();
        formData.append("action", action);
        formData.append("loginInfo", localStorage.getItem('isLoggedIn'));
        this.http.post("http://localhost:8000/php/home.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>CLEARFIX</ion-title>\n\n      <ion-buttons end *ngIf="account">\n\n          <button ion-button icon-only (click)="logoutUser()">\n\n            <ion-icon name="log-out"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center> <br> Clearfix mobil <br>uygulamasına hoş geldiniz.</div>\n\n        <div *ngIf="account" class="card-title" text-center>Sayın {{name}} {{surname}},</div>\n\n      </ion-card>\n\n      \n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="newAccount()">YENİ HESAP OLUŞTUR</button>\n\n      <button *ngIf="!account; else loggedIn" ion-button class="button-middle" (click)="loginUser()">ÜYE GİRİŞİ</button>\n\n      <ng-template #loggedIn>\n\n          <button *ngIf="authority == \'1\'" ion-button class="button-middle" (click)="goToCategories()">KATEGORİLERE GİT</button>\n\n      </ng-template>\n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="loginDoctor()">HEKİM GİRİŞİ</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/pages/home/home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>CLEARFIX</ion-title>\n\n      <ion-buttons end *ngIf="account">\n\n          <button ion-button icon-only (click)="logoutUser()">\n\n            <ion-icon name="log-out"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center> <br> Clearfix mobil <br>uygulamasına hoş geldiniz.</div>\n\n        <div *ngIf="account" class="card-title" text-center>Sayın {{name}} {{surname}},</div>\n\n      </ion-card>\n\n      \n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="newAccount()">YENİ HESAP OLUŞTUR</button>\n\n      <button *ngIf="!account; else loggedIn" ion-button class="button-middle" (click)="loginUser()">ÜYE GİRİŞİ</button>\n\n      <ng-template #loggedIn>\n\n          <button *ngIf="authority == \'1\'" ion-button class="button-middle" (click)="goToCategories()">KATEGORİLERE GİT</button>\n\n      </ng-template>\n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="loginDoctor()">HEKİM GİRİŞİ</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/pages/home/home.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_progress_timer_progress__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var components = [
    __WEBPACK_IMPORTED_MODULE_2__timer_progress_timer_progress__["a" /* TimerProgress */],
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [components],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [components]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimerProgress = /** @class */ (function () {
    function TimerProgress(sanitizer, http) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.http = http;
        this.timeInSeconds = 1209600;
        this.postDataLoad(function (json_result) {
            console.log(json_result);
            if (json_result['message'] === 'found') {
                _this.timeInSeconds = json_result['time'];
                _this.initTimer();
                _this.startTimerWithoutPostDataSend();
            }
            else {
                _this.timeInSeconds = 1209600;
                _this.initTimer();
            }
        });
    }
    TimerProgress.prototype.ngOnInit = function () {
    };
    TimerProgress.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerProgress.prototype.initProgressBar = function () {
        this.percent = 100;
        this.increment = 180 / 100;
        var progress = 'rotate(' + this.increment * this.percent + 'deg)';
        this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
        this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
    };
    TimerProgress.prototype.initTimer = function () {
        this.initProgressBar();
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerProgress.prototype.startTimerWithoutPostDataSend = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerProgress.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
        this.postDataSend();
    };
    TimerProgress.prototype.postDataSend = function () {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("id", localStorage.getItem("id"));
        formData.append("time", "1209600");
        this.http.post("http://localhost:8000/php/timer.php", formData).subscribe(function response(res) {
        });
    };
    TimerProgress.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerProgress.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerProgress.prototype.postDataLoad = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("id", localStorage.getItem("id"));
        this.http.post("http://localhost:8000/php/timer.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    TimerProgress.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            _this.percent = _this.timer.secondsRemaining / _this.timer.seconds * 100;
            _this.increment = 180 / 100;
            var progress = 'rotate(' + _this.increment * _this.percent + 'deg)';
            _this.transform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            _this.fixTransform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerProgress.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var days = Math.floor(secNum / 86400);
        var hours = Math.floor((secNum - (days * 86400)) / 3600);
        var minutes = Math.floor((secNum - (days * 86400) - (hours * 3600)) / 60);
        var seconds = secNum - (days * 86400) - (hours * 3600) - (minutes * 60);
        var daysString = '';
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        daysString = (days < 10) ? '0' + days : days.toString();
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return daysString + ":" + hoursString + ':' + minutesString + ':' + secondsString;
    };
    TimerProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'timer-progress',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/app/components/timer-progress/timer-progress.html"*/'<ion-card *ngIf="timer">\n\n	<ion-card-header>\n\n         <div class="radial-progress" data-progress="0">\n\n            <div class="circle">\n\n                <div class="mask full" [style.transform]="transform">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                </div>\n\n                <div class="mask half">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n\n                </div>\n\n                <div class="shadow"></div>\n\n            </div>\n\n            <div class="inset">\n\n                <div class="percentage">{{timer.displayTime}}</div>\n\n            </div>\n\n        </div>\n\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Yanlış Ayarlandı</button>\n\n	</ion-card-header>\n\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n            <ion-icon name="refresh"></ion-icon>\n\n            Sıfırla\n\n        </button>\n\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="pause"></ion-icon>\n\n            Durdur\n\n        </button>\n\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="play"></ion-icon>\n\n            Devam Et\n\n        </button>\n\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n\n            <ion-icon name="play"></ion-icon>\n\n            Başla\n\n        </button>\n\n	</ion-item>\n\n</ion-card>'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/app/components/timer-progress/timer-progress.html"*/
=======
            selector: 'timer-progress',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/app/components/timer-progress/timer-progress.html"*/'<ion-card *ngIf="timer">\n\n	<ion-card-header>\n\n         <div class="radial-progress" data-progress="0">\n\n            <div class="circle">\n\n                <div class="mask full" [style.transform]="transform">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                </div>\n\n                <div class="mask half">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n\n                </div>\n\n                <div class="shadow"></div>\n\n            </div>\n\n            <div class="inset">\n\n                <div class="percentage">{{timer.displayTime}}</div>\n\n            </div>\n\n        </div>\n\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Yanlış Ayarlandı</button>\n\n	</ion-card-header>\n\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n            <ion-icon name="refresh"></ion-icon>\n\n            Sıfırla\n\n        </button>\n\n		<button ion-button clear class="large" (click)="pauseTimer()" item-end *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="pause"></ion-icon>\n\n            Durdur\n\n        </button>\n\n		<button ion-button clear class="large" (click)="resumeTimer()" item-end *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n            <ion-icon name="play"></ion-icon>\n\n            Devam Et\n\n        </button>\n\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n\n            <ion-icon name="play"></ion-icon>\n\n            Başla\n\n        </button>\n\n	</ion-item>\n\n</ion-card>'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/app/components/timer-progress/timer-progress.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], TimerProgress);
    return TimerProgress;
}());

//# sourceMappingURL=timer-progress.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
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
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/Clearfix/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/Clearfix/src/app/app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/Clearfix/Clearfix/src/app/app.html"*/
>>>>>>> 39d2c5f96d8a6a685de13b4fb04e87c5a7a9545d
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map