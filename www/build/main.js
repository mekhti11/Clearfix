webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__ = __webpack_require__(208);
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
            selector: 'page-login-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-doctor/login-doctor.html"*/'<!--\n  Generated template for the LoginDoctorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor"> \n    <ion-title text-center>HEKİM GİRİŞİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div col-lg-4 class="login-content card" padding>\n\n        <!-- Logo -->\n        <div padding text-center>\n          <div class="logo primary-bg">\n              <img src="/assets/imgs/clearfix.png"/>\n          </div>\n        </div>\n    \n        <!-- Login form -->\n        <ion-list class="list-form list-no-border">\n    \n          <ion-item>\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n            <ion-input type="email">\n            </ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifre</ion-label>\n            <ion-input type="password">\n            </ion-input>\n          </ion-item>\n    \n        </ion-list>\n    \n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n    \n        <div margin-top>\n          <button ion-button block class="button-middle" (click)="login()">\n            GIRIŞ YAP\n          </button>\n        </div>\n    \n        <!-- Other links -->\n        <div text-center margin-top>\n          <span ion-text (click)="register()">Hesabın yok mu?<a>Kaydol</a></span>\n        </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-doctor/login-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginDoctorPage);
    return LoginDoctorPage;
}());

//# sourceMappingURL=login-doctor.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the TicketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-ticket-list',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/ticket-list/ticket-list.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>TİCKET LİSTESİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-card no-padding style="box-shadow: none;">\n      \n      \n        <ion-card-content>\n            <b style="font-size:25px; color:rgb(101, 183, 221);"> Bütün ticket listesini görmek için lütfen yana kaydırınız.</b>\n        </ion-card-content>\n      </ion-card>\n     \n      <ion-scroll scrollX scrollY style="height:200px;">\n          <div class="scroll-header">\n          ID\n          </div>\n          <div class="scroll-header">\n          Durum\n          </div>\n        <div class="scroll-header">\n          Öncelik\n          </div>\n      <div class="scroll-header">\n          Konu\n        </div>\n        <div class="scroll-header">\n          Yükselten\n          </div>\n          <div class="scroll-header">\n          Kategori\n            </div>\n       <div class="scroll-header">\n          Yetkili \n        </div>\n      <div class="scroll-header">\n           OLuşturldu\n        </div>\n      <div class="scroll-header">\n           Güncellendi\n      </div>\n      <div class="scroll-header">\n          Adım\n      </div>\n          <br>\n          <div class="scroll-item">\n              Item 1\n              </div> \n              <div class="scroll-item">\n              Item 2\n              </div>\n            <div class="scroll-item">\n              Item 3\n              </div>\n          <div class="scroll-item">\n              Item 4\n            </div>\n            <div class="scroll-item">\n              Item 5\n              </div>\n              <div class="scroll-item">\n              Item 6\n                </div>\n           <div class="scroll-item">\n              Item 7\n            </div>\n          <div class="scroll-item">\n              Item 8\n            </div>\n          <div class="scroll-item">\n              Item 9\n          </div>\n          <br>\n          <div class="scroll-item">\n              Item 1\n              </div>\n              <div class="scroll-item">\n              Item 2\n              </div>\n            <div class="scroll-item">\n              Item 3\n              </div>\n          <div class="scroll-item">\n              Item 4\n            </div>\n            <div class="scroll-item">\n              Item 5\n              </div>\n              <div class="scroll-item">\n              Item 6\n                </div>\n           <div class="scroll-item">\n              Item 7\n            </div>\n          <div class="scroll-item">\n              Item 8\n            </div>\n          <div class="scroll-item">\n              Item 9\n          </div>\n          <br>\n          <div class="scroll-item">\n              Item 1\n              </div>\n              <div class="scroll-item">\n              Item 2\n              </div>\n            <div class="scroll-item">\n              Item 3\n              </div>\n          <div class="scroll-item">\n              Item 4\n            </div>\n            <div class="scroll-item">\n              Item 5\n              </div>\n              <div class="scroll-item">\n              Item 6\n                </div>\n           <div class="scroll-item">\n              Item 7\n            </div>\n          <div class="scroll-item">\n              Item 8\n            </div>\n          <div class="scroll-item">\n              Item 9\n          </div>\n          <br>\n          <div class="scroll-item">\n              Item 1\n              </div>\n              <div class="scroll-item">\n              Item 2\n              </div>\n            <div class="scroll-item">\n              Item 3\n              </div>\n          <div class="scroll-item">\n              Item 4\n            </div>\n            <div class="scroll-item">\n              Item 5\n              </div>\n              <div class="scroll-item">\n              Item 6\n                </div>\n           <div class="scroll-item">\n              Item 7\n            </div>\n          <div class="scroll-item">\n              Item 8\n            </div>\n          <div class="scroll-item">\n              Item 9\n          </div>\n          <br>\n          <div class="scroll-item">\n              Item 1\n              </div>\n              <div class="scroll-item">\n              Item 2\n              </div>\n            <div class="scroll-item">\n              Item 3\n              </div>\n          <div class="scroll-item">\n              Item 4\n            </div>\n            <div class="scroll-item">\n              Item 5\n              </div>\n              <div class="scroll-item">\n              Item 6\n                </div>\n           <div class="scroll-item">\n              Item 7\n            </div>\n          <div class="scroll-item">\n              Item 8\n            </div>\n          <div class="scroll-item">\n              Item 9\n          </div>\n        </ion-scroll>\n      \n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/ticket-list/ticket-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TicketListPage);
    return TicketListPage;
}());

//# sourceMappingURL=ticket-list.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ticket-list/ticket-list.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_appointments__ = __webpack_require__(100);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="tabColor">\n    <ion-title text-center>\n      HESABIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   \n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__ = __webpack_require__(201);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewAccountPage);
    return NewAccountPage;
}());

//# sourceMappingURL=new-account.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_activation_success_activation__ = __webpack_require__(202);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SmsOtpPage.prototype.completeAppointment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__success_activation_success_activation__["a" /* SuccessActivationPage */]);
    };
    SmsOtpPage.prototype.repeatTheSmsOPT = function () {
    };
    SmsOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sms-otp',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/sms-otp/sms-otp.html"*/'<!--\n  Generated template for the SmsOtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HESAP AKTİVASYONU </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="closePage()">\n         Kapat    \n         </button>\n   </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> Cep telefonunuza aktivasyon için<br>SMS ile kod gönderilecektir.</div>\n      </ion-card>\n      <ion-item>\n          <ion-label stacked>SMS ile gelen şifre:<br></ion-label> \n          <ion-input type="number" placeholder="XXXXXX"></ion-input>\n        </ion-item>\n        <button ion-button class="button-middle" (click)="completeAppointment()">AKTİVASYONU TAMAMLA</button>\n        <button ion-button class="button-middle" (click)="repeatTheSmsOPT()">ŞİFREYİ TEKRAR GÖNDER</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/sms-otp/sms-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SmsOtpPage);
    return SmsOtpPage;
}());

//# sourceMappingURL=sms-otp.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__make_appointment_1_make_appointment_1__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-success-activation',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/success-activation/success-activation.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HESAP AKTİVASYONU</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n        <img src="/assets/imgs/clearfix.png"/>\n        <div class="card-title" text-center><br> Tebrikler! Aktivasyon işlemleri başarıyla tamamlandı. <br> Anasayfaya dönmek için lütfen aşağıdaki Butona tıklayınız veya RANDEVU AL butonuna tıklayınız.</div>\n      </ion-card>\n     \n        <button ion-button class="button-middle" (click)="homePage()"> ANASAYFAYA GİT</button>\n        <button ion-button class="button-middle" (click)="makeappointment()">RANDEVU AL</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/success-activation/success-activation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], SuccessActivationPage);
    return SuccessActivationPage;
}());

//# sourceMappingURL=success-activation.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__ = __webpack_require__(204);
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
            selector: 'page-make-appointment-1',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-1/make-appointment-1.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (1/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br>Temel Bilgiler<br>Lütfen temel bilgilerinizi eksiksiz bir şekilde doldurunuz.</div>\n      </ion-card>\n      \n\n        <ion-item>\n          <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n          <ion-input type="text" placeholder="Lütfen adınızı yazınız"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soydınız</ion-label>\n          <ion-input type="text" placeholder="Lütfen soyadınızı yazınız"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n          <ion-input type="email"  placeholder="Lütfen E-posta adresinizi yazınız"></ion-input>\n        </ion-item>\n        \n        <ion-list>\n          <ion-item>\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n            <ion-select [(ngModel)]="gender">\n              <ion-option value="male">Bay</ion-option>\n              <ion-option value="female">Bayan</ion-option>\n            </ion-select>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n            <ion-select [(ngModel)]="city">\n              <ion-option value="1">Adana</ion-option>\n              <ion-option value="2">Adıyaman</ion-option>\n              <ion-option value="3">Afyonkarahisar</ion-option>\n              <ion-option value="4">Ağrı</ion-option>\n              <ion-option value="5">Amasya</ion-option>\n              <ion-option value="6">Ankara</ion-option>\n              <ion-option value="7">Antalya</ion-option>\n              <ion-option value="8">Artvin</ion-option>\n              <ion-option value="9">Aydın</ion-option>\n              <ion-option value="10">Balıkesir</ion-option>\n              <ion-option value="11">Bilecik</ion-option>\n              <ion-option value="12">Bingöl</ion-option>\n              <ion-option value="13">Bitlis</ion-option>\n              <ion-option value="14">Bolu</ion-option>\n              <ion-option value="15">Burdur</ion-option>\n              <ion-option value="16">Bursa</ion-option>\n              <ion-option value="17">Çanakkale</ion-option>\n              <ion-option value="18">Çankırı</ion-option>\n              <ion-option value="19">Çorum</ion-option>\n              <ion-option value="20">Denizli</ion-option>\n              <ion-option value="21">Diyarbakır</ion-option>\n              <ion-option value="22">Edirne</ion-option>\n              <ion-option value="23">Elazığ</ion-option>\n              <ion-option value="24">Erzincan</ion-option>\n              <ion-option value="25">Erzurum</ion-option>\n              <ion-option value="26">Eskişehir</ion-option>\n              <ion-option value="27">Gaziantep</ion-option>\n              <ion-option value="28">Giresun</ion-option>\n              <ion-option value="29">Gümüşhane</ion-option>\n              <ion-option value="30">Hakkâri</ion-option>\n              <ion-option value="31">Hatay</ion-option>\n              <ion-option value="32">Isparta</ion-option>\n              <ion-option value="33">Mersin</ion-option>\n              <ion-option value="34">İstanbul</ion-option>\n              <ion-option value="35">İzmir</ion-option>\n              <ion-option value="36">Kars</ion-option>\n              <ion-option value="37">Kastamonu</ion-option>\n              <ion-option value="38">Kayseri</ion-option>\n              <ion-option value="39">Kırklareli</ion-option>\n              <ion-option value="40">Kırşehir</ion-option>\n              <ion-option value="41">Kocaeli</ion-option>\n              <ion-option value="42">Konya</ion-option>\n              <ion-option value="43">Kütahya</ion-option>\n              <ion-option value="44">Malatya</ion-option>\n              <ion-option value="45">Manisa</ion-option>\n              <ion-option value="46">Kahramanmaraş</ion-option>\n              <ion-option value="47">Mardin</ion-option>\n              <ion-option value="48">Muğla</ion-option>\n              <ion-option value="49">Muş</ion-option>\n              <ion-option value="50">Nevşehir</ion-option>\n              <ion-option value="51">Niğde</ion-option>\n              <ion-option value="52">Ordu</ion-option>\n              <ion-option value="53">Rize</ion-option>\n              <ion-option value="54">Sakarya</ion-option>\n              <ion-option value="55">Samsun</ion-option>\n              <ion-option value="56">Siirt</ion-option>\n              <ion-option value="57">Sinop</ion-option>\n              <ion-option value="58">Sivas</ion-option>\n              <ion-option value="59">Tekirdağ</ion-option>\n              <ion-option value="60">Tokat</ion-option>\n              <ion-option value="61">Trabzon</ion-option>\n              <ion-option value="62">Tunceli</ion-option>\n              <ion-option value="63">Şanlıurfa</ion-option>\n              <ion-option value="64">Uşak</ion-option>\n              <ion-option value="65">Van</ion-option>\n              <ion-option value="66">Yozgat</ion-option>\n              <ion-option value="67">Zonguldak</ion-option>\n              <ion-option value="68">Aksaray</ion-option>\n              <ion-option value="69">Bayburt</ion-option>\n              <ion-option value="70">Karaman</ion-option>\n              <ion-option value="71">Kırıkkale</ion-option>\n              <ion-option value="72">Batman</ion-option>\n              <ion-option value="73">Şırnak</ion-option>\n              <ion-option value="74">Bartın</ion-option>\n              <ion-option value="75">Ardahan</ion-option>\n              <ion-option value="76">Iğdır</ion-option>\n              <ion-option value="77">Yalova</ion-option>\n              <ion-option value="78">Karabük</ion-option>\n              <ion-option value="79">Kilis</ion-option>\n              <ion-option value="80">Osmaniye</ion-option>\n              <ion-option value="81">Düzce</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        \n        <ion-item>\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n          <ion-input type="text"  placeholder="Lütfen yaşadığınız ilçeyi yazınız"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek İstedikleriniz</ion-label>\n          <ion-textarea rows="4" [(ngModel)]="text" autosize placeholder="Eklemek istediğiniz...."></ion-textarea>\n        </ion-item>\n        <button ion-button class="button-middle" (click)="nextStep_1()">Sonraki Adım</button>\n\n      \n      \n\n        \n        \n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-1/make-appointment-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MakeAppointment_1Page);
    return MakeAppointment_1Page;
}());

//# sourceMappingURL=make-appointment-1.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_3_make_appointment_3__ = __webpack_require__(205);
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
    function MakeAppointment_2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakeAppointment_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_2Page');
    };
    MakeAppointment_2Page.prototype.nextStep_2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */]);
    };
    MakeAppointment_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-2',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-2/make-appointment-2.html"*/'<!--\n  Generated template for the MakeAppointment_2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (2/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br><h1 class="h1">FOTOĞRAF YÜKLEME</h1><br>Lütfen aşağıda belirtildiği gibi fotoğraflarınızı çekip yükleyiniz</div>\n      </ion-card>  <br><br>\n      <h5 class="h5">1. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <img src="/assets/imgs/apple.png"/>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle">1. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">2. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <img src="/assets/imgs/apple.png"/>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle">2. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">3. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <img src="/assets/imgs/apple.png"/>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle">3. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">4. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <img src="/assets/imgs/apple.png"/>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle">4. FOTOĞRAF EKLE</button>\n        <br><br>\n        <h5 class="h5">5. FOTOĞRAF EKLE</h5>\n      <ion-grid>\n          <ion-row center>\n            <ion-col col-6 no-padding>\n              <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n              </ion-card>\n          </ion-col>\n          <ion-col col-6 no-padding> \n              <ion-card>\n                <img src="/assets/imgs/apple.png"/>\n              </ion-card>   \n        </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button class="button-middle">5. FOTOĞRAF EKLE</button>\n        <br><br><br><br>\n        <button ion-button class="button-nextStep" (click)="nextStep_2()">SONRAKİ ADIM</button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-2/make-appointment-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MakeAppointment_2Page);
    return MakeAppointment_2Page;
}());

//# sourceMappingURL=make-appointment-2.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_4_make_appointment_4__ = __webpack_require__(206);
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
    function MakeAppointment_3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakeAppointment_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_3Page');
    };
    MakeAppointment_3Page.prototype.create_appointment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */]);
    };
    MakeAppointment_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-3',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-3/make-appointment-3.html"*/'<!--\n  Generated template for the MakeAppointment_3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>RANDEVU AL (3/4)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="card-parent">\n        <div class="card-title" text-center><br>\n          <h1 class="h1">BİLGİLERİNİZİ KONTROL EDİNİZ </h1>\n        <br>Lütfen bilgilerinizi son bir kez daha kontrol ediniz ve gönderiniz</div>\n    </ion-card><br><br>\n    \n    \n        <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n        <h5>Muratcan</h5>\n    \n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221); ">Soyadınız</ion-label>\n        <h5>Kılıç</h5>\n      \n      \n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta Adresiniz</ion-label>\n        <h5>murat34@gmail.com</h5>\n      \n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Cinsiyetiniz</ion-label>\n        <h5>Bay</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İl</ion-label>\n        <h5>İstanbul</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Yaşadığınız İlçe</ion-label>\n        <h5>Kadıköy</h5>\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Eklemek istediğniz</ion-label>\n        <h5>Teknopark indiriminden yaralanmak istiyorum.</h5>\n\n        <h5 class="h5">1. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle">1. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">2. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle">2. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">3. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle">3. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">4. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle">4. FOTOĞRAF EKLE</button>\n          <br><br>\n          <h5 class="h5">5. FOTOĞRAF </h5>\n        <ion-grid>\n            <ion-row center>\n              <ion-col col-6 no-padding>\n                <ion-card>\n                    <img src="/assets/imgs/apple.png"/>\n                </ion-card>\n            </ion-col>\n            <ion-col col-6 no-padding> \n                <ion-card>\n                  <img src="/assets/imgs/apple.png"/>\n                </ion-card>   \n          </ion-col>\n            </ion-row>\n          </ion-grid>\n          <button ion-button class="button-middle">5. FOTOĞRAF EKLE</button>\n          <br><br><br><br>\n          <button ion-button class="button-edit-information">BİLİGİLERİMİ DÜZENLE</button>\n          <br>\n          <button ion-button class="button-edit-information" (click)="create_appointment()">RANDEVUYU OLUŞTUR</button>\n\n      \n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/make-appointment-3/make-appointment-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MakeAppointment_3Page);
    return MakeAppointment_3Page;
}());

//# sourceMappingURL=make-appointment-3.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointments_appointments__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], MakeAppointment_4Page);
    return MakeAppointment_4Page;
}());

//# sourceMappingURL=make-appointment-4.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-user',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-user/login-user.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>ÜYE GİRİŞİ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/login-user/login-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginUserPage);
    return LoginUserPage;
}());

//# sourceMappingURL=login-user.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ticket_list_ticket_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__ = __webpack_require__(101);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__ticket_list_ticket_list__["a" /* TicketListPage */]);
    };
    RegisterDoctorPage.prototype.login = function () {
        console.log("tıkladı");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    RegisterDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register-doctor',template:/*ion-inline-start:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/register-doctor/register-doctor.html"*/'\n<ion-header>\n\n  <ion-navbar color="tabColor">\n    <ion-title text-center>HEKİM KAYIT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div col-lg-4 class="login-content card" padding>\n        <!--logo-->\n        <div padding text-center>\n          <div class="logo primary-bg">\n              <img src="/assets/imgs/clearfix.png"/>\n          </div>\n          <h5 style="font-weight: bold; color:rgb(101, 183, 221);">Lütfen formu eksiksiz doldurunuz. Sadece Diş Hekimleri uygulamaya kayıt yapabilir.</h5>\n        </div>\n         <!-- Login form -->\n         <ion-list class="list-form list-no-border">\n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Adınız</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Soyadınız</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">E-posta</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Telefon</ion-label>\n                <ion-input type="tel"></ion-input>\n              </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreniz</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n      \n            <ion-item>\n              <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">Şifreyi onayla</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n      \n          </ion-list>\n      \n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n          <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n          <ion-label >Lisanslı Diş Hekimi olduğumu onaylıyorum. </ion-label>\n          \n          <ion-checkbox style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n          <ion-label>Beyan ettiğim bilgilerin doğruluğunu ve <a>Clearfix</a><br> üyelik kural ve koşullarını kabul ediyorum.</ion-label>\n          \n\n          <div margin-top>\n            <button ion-button block class="button-middle"  (click)="register()">\n              Kaydol\n            </button>\n          </div>\n      \n          <!-- Other links -->\n          <div text-center margin-top>\n            <span ion-text (click)="login()">Hesabın var mı?</span>\n          </div>\n         </div>\n</ion-content>\n'/*ion-inline-end:"/home/vinos/Masaüstü/clearfixapp/clearfixApp/src/pages/register-doctor/register-doctor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], RegisterDoctorPage);
    return RegisterDoctorPage;
}());

//# sourceMappingURL=register-doctor.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_appointments_appointments__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_account_new_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sms_otp_sms_otp__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_doctor_login_doctor__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_doctor_register_doctor__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_user_login_user__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ticket_list_ticket_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_success_activation_success_activation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_make_appointment_1_make_appointment_1__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_make_appointment_2_make_appointment_2__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_make_appointment_3_make_appointment_3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_make_appointment_4_make_appointment_4__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ticket-list/ticket-list.module#TicketListPageModule', name: 'TicketListPage', segment: 'ticket-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_account_new_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_user_login_user__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__ = __webpack_require__(101);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map