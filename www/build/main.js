webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWithDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
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
            _this.your_id = localStorage.getItem('id');
            _this.their_id = localStorage.getItem('chatval');
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
        formData.append("your_id", localStorage.getItem('id'));
        formData.append("other_id", localStorage.getItem('chatval')); // Bunlar geçici.
        formData.append("content", this.message);
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/chat-with-doctor.php", formData).subscribe(function response(res) {
            callback();
        });
    };
    ChatWithDoctorPage.prototype.loadMessages = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("your_id", localStorage.getItem('id'));
        formData.append("other_id", localStorage.getItem('chatval')); // Bunlar geçici.
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/chat-with-doctor.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    ChatWithDoctorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatWithDoctorPage');
    };
    ChatWithDoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-with-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >{{\'ChatWithDoctorPage.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item no-lines *ngFor="let chat of chats"> <!---burada *ngFor olacak-->\n\n            <div class="chat-message" text-right *ngIf="chat.receiver_id !== your_id"> <!-- burasi doktor attiginda sag gider mesaj -->\n\n              <div class="right-bubble">\n\n                <span class="msg-name">{{\'ChatWithDoctorPage.SEN\' | translate}}</span> <!-- Yani doktor olacak burada -->\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n            <div class="chat-message" text-left *ngIf="chat.receiver_id === your_id"> <!-- *ngIf="chat.your_id !== 10" burasi hasta attiginda sola gider -->\n\n              <div class="left-bubble">\n\n                <span class="msg-name">{{chat.your_id}}</span>\n\n                <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n\n                <p text-wrap> <b>{{chat.content}}</b></p>\n\n              </div>\n\n            </div>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-input type="text" placeholder=" {{ \'ChatWithDoctorPage.BIR_MESAJ_YAZ\' | translate }} "   name="message" [(ngModel)]="message"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="sendMessage()">\n\n          <ion-icon name="paper-plane"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/chat-with-doctor/chat-with-doctor.html"*/,
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(213);
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
    function SimulationPage(navCtrl, navParams, domSanitizer, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.screenOrientation = screenOrientation;
        // linki buradan aliyor.
        this.vid = localStorage.getItem('simulation');
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    SimulationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SimulationPage');
    };
    SimulationPage.prototype.sanitizer = function (vid) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(vid);
    };
    SimulationPage.prototype.ngOnInit = function () {
        this.changeIcons();
    };
    SimulationPage.prototype.ionViewWillLeave = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.screenOrientation.unlock();
    };
    SimulationPage.prototype.changeIcons = function () {
        // Example Message 2 - Place all navigation icons at the right side
        var msg = '{"type":"ICONS_RIGHT","value":"1rem"}';
        window.frames[0].postMessage(msg, "*");
    };
    SimulationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simulation',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/simulation/simulation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >\n\n        {{\'SimulationPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <iframe class="iframe" [src]="sanitizer(vid)" frameborder="0"  allowfullscreen name="OnyxCephWebGL"></iframe>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/simulation/simulation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SimulationPage);
    return SimulationPage;
}());

//# sourceMappingURL=simulation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(221);
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
            alert('CAMERA ERROR -> ' + JSON.stringify(error));
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
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
    function AppointmentsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.authority = localStorage.getItem("user_authority");
        this.appointments = [];
        this.postData(function (json_result) {
            console.log(json_result);
            _this.appointments = json_result;
        });
    }
    AppointmentsPage.prototype.ionViewDidEnter = function () {
        this.authority = localStorage.getItem("user_authority");
    };
    AppointmentsPage.prototype.infoAppointment = function () {
        console.log("Randevu detayları");
    };
    AppointmentsPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("id", localStorage.getItem("id"));
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/appointments.php", formData).subscribe(function response(res) {
            //this.http.post("http://localhost:8000/php/appointments.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    AppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointments',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/appointments/appointments.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'AppointmentPage.RANDEVULARIM\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="authority == \'0\'; else error" >\n\n  <ion-card style="background-color:#EBEDEF;" *ngFor="let appointment of appointments">\n\n    <ion-card-content >\n\n      <h2>{{ \'AppointmentPage.RANDEVU_NO\' | translate }} :  {{appointment.appointment_no}}</h2><br>\n\n      <h2>{{ \'AppointmentPage.RANDEVU_TARIHI\' | translate }} :  {{appointment.appointment_date}}</h2><br>\n\n      <h2>{{ \'AppointmentPage.RANDEVU_DURUMU\' | translate }} :  {{appointment.appointment_content}}</h2><br>\n\n    </ion-card-content>\n\n\n\n     <br>\n\n\n\n  </ion-card>\n\n\n\n</ion-card>\n\n\n\n<ng-template #error>\n\n    <ion-card >\n\n    <ion-card-content style="background-color:rgb(220, 241, 243);">\n\n      <b style="font-size:18px; color:rgb(75, 168, 211); ">{{\'AboutPage.IS_DOCTOR\' | translate}}</b>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </ng-template>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/appointments/appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_doctor_register_doctor__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/login-doctor.php", formData).subscribe(function respond(res) {
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
                    _this.warning_user = "Email veya şifre yanlış.";
                    console.log(_this.warning_user);
                }
                else {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('name', json_result['name']);
                    localStorage.setItem('surname', json_result['surname']);
                    localStorage.setItem('username', json_result['username']);
                    localStorage.setItem('user_authority', '1');
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
            selector: 'page-login-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/login-doctor/login-doctor.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'LoginDoctorPage.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding>\n\n\n\n        <!-- Logo -->\n\n        <div padding text-center>\n\n          <div class="logo primary-bg">\n\n              <img src="/assets/imgs/loginDoktor.png"/>\n\n          </div>\n\n          <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n            <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n            {{\'LoginUserPage.BTN_LOGIN\' | translate}}\n\n        </h5>\n\n        </div>\n\n     \n\n\n\n        <!-- Login form -->\n\n\n\n          <ion-item>\n\n\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'LoginDoctorPage.EMAIL\' | translate}}</ion-label>\n\n\n\n            <ion-input type="email" [(ngModel)]="user_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'LoginDoctorPage.PWORD\' | translate}}</ion-label>\n\n            <ion-input type="password" [(ngModel)]="pass_data">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n\n\n        <div margin-top>\n\n          <button ion-button block (click)="login()" class="button-middle">\n\n              {{ \'LoginDoctorPage.BTN_LOGIN\' | translate}}\n\n          </button>\n\n        </div>\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n          <span ion-text (click)="register()">{{ \'LoginDoctorPage.HESABIN_YOK_MU\' | translate}}<b>{{ \'LoginDoctorPage.KAYDOL\' | translate}}</b></span>\n\n        </div>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/login-doctor/login-doctor.html"*/,
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

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_appointments__ = __webpack_require__(109);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle=" {{ \'TabsPage.ANASAYFA\' | translate}}" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle=" {{ \'TabsPage.RANDAVULARIM\' | translate}}" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle=" {{ \'TabsPage.HESABIM\' | translate}}" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle=" {{ \'TabsPage.AYARLAR\' | translate}}" tabIcon="build"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_with_doctor_chat_with_doctor__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulation_simulation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(32);
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
    function AboutPage(navCtrl, http, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.authority = localStorage.getItem("user_authority");
        this.isLoggedIn = localStorage.getItem("isLoggedIn");
    }
    AboutPage.prototype.timer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__timer_timer__["a" /* TimerPage */]);
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        this.authority = localStorage.getItem("user_authority");
        this.isLoggedIn = localStorage.getItem("isLoggedIn");
    };
    AboutPage.prototype.translateContent = function (callback) {
        var translatedContent;
        this.translate.get("AboutPage.HASTA_ULASILAMADI").subscribe(function (value) {
            translatedContent = value;
            console.log(translatedContent);
            callback(translatedContent);
        });
    };
    AboutPage.prototype.chatWithDoctor = function () {
        var _this = this;
        this.translateContent(function (translatedContent) {
            _this.postData(function (json_result) {
                if (json_result['message'] == 'success') {
                    localStorage.setItem("chatval", json_result['id']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: translatedContent,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        });
    };
    AboutPage.prototype.simulation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__simulation_simulation__["a" /* SimulationPage */]);
    };
    AboutPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "detect");
        formData.append("name", localStorage.getItem("name"));
        formData.append("surname", localStorage.getItem("surname"));
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/about.php", formData)
            .subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      {{\'AboutPage.BASLIK\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div>\n\n        <ion-card style="background-color:rgb(220, 241, 243);">\n\n          <ion-card-content>\n\n            <b style="font-size:18px; color:rgb(75, 168, 211); " *ngIf="isLoggedIn == \'false\'; else loggedIn">{{\'AboutPage.GIRIS_YAP\' | translate}}</b>\n\n          <ng-template #loggedIn>\n\n              <b style="font-size:18px; color:rgb(75, 168, 211); " *ngIf="authority == \'0\'; else isDoctor">{{\'AboutPage.BTNs\' | translate }}</b>\n\n          </ng-template>\n\n          <ng-template #isDoctor>\n\n            <b style="font-size:18px; color:rgb(75, 168, 211); ">{{\'AboutPage.IS_DOCTOR\' | translate}}</b>\n\n          </ng-template>\n\n          </ion-card-content>\n\n          \n\n        </ion-card>\n\n        </div>\n\n   \n\n  <button ion-button *ngIf="authority == \'0\'" class="button-middle" (click)="chatWithDoctor()">{{\'AboutPage.BTN_CHAT_WITH_DOCTOR\' | translate}}</button>\n\n  <button ion-button *ngIf="authority == \'0\'" class="button-middle" (click)="timer()">{{\'AboutPage.BTN_TIMER\' | translate}}</button>\n\n  \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 212:
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
    };
    TimerPage.prototype.ionViewDidEnter = function () {
    };
    TimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timer',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/timer/timer.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>\n\n        {{ \'TimerPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <timer-progress #countdownTimerProgress>\n\n    </timer-progress>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/timer/timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TimerPage);
    return TimerPage;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(32);
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
    function ContactPage(navCtrl, translate) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.language = this.translate.currentLang;
    }
    ContactPage.prototype.changeLNG = function () {
        console.log(this.language);
        this.translate.use(this.language);
        localStorage.setItem("language", this.language);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n      {{ \'ContactPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card >\n\n    <ion-item>\n\n        <ion-label>\n\n            {{ \'ContactPage.LNG\' | translate}}\n\n        </ion-label>\n\n        <ion-select [(ngModel)]="language" (ionChange)="changeLNG()"\n\n         okText="{{ \'ContactPage.OKAY\' | translate}}"\n\n         cancelText="{{ \'ContactPage.DISMISS\' | translate}}">\n\n          <ion-option value="en">English</ion-option>\n\n          <ion-option value="tr">Türkçe</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
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
    function NewAccountPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.checker = false;
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
        if (this.telephone && this.telephone.length == 10) {
            this.postData(function (json_result) {
                localStorage.setItem("activation", json_result['activation']);
                localStorage.setItem("tel_no", _this.telephone);
                console.log(localStorage.getItem('tel_no'));
                console.log(json_result['activation']);
            });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sms_otp_sms_otp__["a" /* SmsOtpPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'HATA!',
                subTitle: 'Lütfen 10 haneli telefon numaranızı doğru giriniz!',
                buttons: ['OK']
            });
            alert_1.present();
            console.log(this.telephone);
        }
    };
    NewAccountPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("telephone", this.telephone);
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/new-account.php", formData).subscribe(function (res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    NewAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-account',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/new-account/new-account.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n        {{ \'NewAccountPage.TITLE\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n         {{ \'NewAccountPage.CLOSE\' | translate}}\n\n         </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n      <div padding text-center>\n\n        <div class="logo primary-bg">\n\n            <img src="/assets/imgs/loginDoktor.png"/>\n\n        </div>\n\n        <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n          <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n          {{ \'NewAccountPage.ACTIVATION\' | translate}}\n\n      </h5>\n\n      </div>\n\n\n\n    <ion-item>\n\n        <ion-label style="font-weight: bold;">+90</ion-label>\n\n          <ion-input type="tel" [(ngModel)]="telephone"  placeholder="(111)-111-1111" pattern="06([0-9]{3})-([0-9]{3})-([0-9]{4})"></ion-input>\n\n    </ion-item>\n\n    <br><br>\n\n    <ion-item>\n\n        <ion-label style="float:left;margin-right:8px;font-size: 14px">\n\n            {{ \'NewAccountPage.TERMS_RIGHTS1\' | translate}} <br>\n\n            {{ \'NewAccountPage.TERMS_RIGHTS2\' | translate}} <a>Clearfix</a> <br>\n\n            {{ \'NewAccountPage.TERMS_RIGHTS3\' | translate}}\n\n        </ion-label>\n\n        <ion-checkbox checked="true" [(ngModel)]="checker"></ion-checkbox>\n\n    </ion-item>\n\n\n\n      <button ion-button class="button-middle" [disabled]="!checker" (click)="sendSmsOTP()">\n\n          {{ \'NewAccountPage.BTN_SEND_SMS\' | translate}}\n\n      </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/new-account/new-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewAccountPage);
    return NewAccountPage;
}());

//# sourceMappingURL=new-account.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__password_password__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(32);
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
    function SmsOtpPage(navCtrl, navParams, translate, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
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
    SmsOtpPage.prototype.translateContentPassword = function (callback) {
        var translatedContent;
        this.translate.get("SMS_OTP_Page.PASSWORD").subscribe(function (value) {
            translatedContent = value;
            callback(translatedContent);
        });
    };
    SmsOtpPage.prototype.translateContentNotActivated = function (callback) {
        var translatedContent;
        this.translate.get("SMS_OTP_Page.ACTIVATION_MESSAGE1").subscribe(function (value) {
            translatedContent = value;
            callback(translatedContent);
        });
    };
    SmsOtpPage.prototype.translateContentResent = function (callback) {
        var translatedContent;
        this.translate.get("SMS_OTP_Page.ACTIVATION_MESSAGE2").subscribe(function (value) {
            translatedContent = value;
            callback(translatedContent);
        });
    };
    SmsOtpPage.prototype.completeAppointment = function () {
        var _this = this;
        this.translateContentNotActivated(function (translatedContent) {
            var activation = localStorage.getItem("activation");
            if (_this.activation_user == activation) {
                localStorage.setItem("activation", "");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__password_password__["a" /* PasswordPage */]);
            }
            else {
                _this.translateContentPassword(function (translatedContent2) {
                    var alert = _this.alertCtrl.create({
                        title: translatedContent2,
                        subTitle: translatedContent,
                        buttons: ['OK']
                    });
                    alert.present();
                });
                _this.activation_user = "";
            }
        });
    };
    SmsOtpPage.prototype.repeatTheSmsOTP = function () {
        var _this = this;
        this.translateContentNotActivated(function (translatedContent) {
            _this.postData(function (json_result) {
                _this.translateContentPassword(function (translatedContent2) {
                    var alert = _this.alertCtrl.create({
                        title: translatedContent2,
                        subTitle: translatedContent,
                        buttons: ['OK']
                    });
                    alert.present();
                });
                localStorage.setItem("activation", json_result['activation']);
            });
            _this.navCtrl.setRoot(SmsOtpPage_1);
        });
    };
    SmsOtpPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("telephone", localStorage.getItem("tel_no"));
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/new-account.php", formData).subscribe(function (res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    SmsOtpPage = SmsOtpPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sms-otp',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/sms-otp/sms-otp.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n        {{ \'SMS_OTP_Page.TITLE\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="closePage()">\n\n            {{ \'SMS_OTP_Page.CLOSE\' | translate}}\n\n        </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div padding text-center>\n\n        <div class="logo primary-bg">\n\n            <img src="/assets/imgs/loginDoktor.png"/>\n\n        </div>\n\n        <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n          <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n          {{ \'NewAccountPage.ACTIVATION\' | translate}}\n\n      </h5>\n\n      </div>\n\n    <ion-item>\n\n        <ion-label stacked>\n\n            {{ \'SMS_OTP_Page.SMS_GELEN_SIFRE\' | translate}}\n\n        <br></ion-label>\n\n        <ion-input type="text" [(ngModel)]="activation_user" placeholder="XXXXXX"></ion-input>\n\n    </ion-item>\n\n    <button ion-button class="button-middle" (click)="completeAppointment()">\n\n        {{ \'SMS_OTP_Page.BTN_AKTIVASYONU_TAMAMLA\' | translate}}\n\n    </button>\n\n    <button ion-button class="button-middle" (click)="repeatTheSmsOTP()">\n\n        {{ \'SMS_OTP_Page.BTN_SIFREYI_TEKRAR_GONDER\' | translate}}\n\n    </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/sms-otp/sms-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SmsOtpPage);
    return SmsOtpPage;
    var SmsOtpPage_1;
}());

//# sourceMappingURL=sms-otp.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_activation_success_activation__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
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
            selector: 'page-password',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/password/password.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>\n\n    {{ \'PasswordPage.TITLE\' | translate}}\n\n     </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div padding text-center>\n\n    <div class="logo primary-bg">\n\n        <img src="/assets/imgs/loginDoktor.png"/>\n\n    </div>\n\n    <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n      <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n      {{ \'PasswordPage.SIFRENIZI_OLUSTURUNUZ\' | translate}}\n\n  </h5>\n\n  </div>\n\n    <form (ngSubmit)="loginUser()">\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'PasswordPage.PWORD\' | translate}}:</ion-label>\n\n          <ion-input type="password" [(ngModel)]=\'pword\' [ngModelOptions]="{standalone: true}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'PasswordPage.SIFRE_ONAYLAYINIZ\' | translate}}:</ion-label>\n\n            <ion-input type="password" [(ngModel)]=\'confirmation_pword\' [ngModelOptions]="{standalone: true}">\n\n            </ion-input>\n\n          </ion-item>\n\n\n\n          <p *ngIf="pword != confirmation_pword &&  confirmation_pword " style="font-size: 12px;color: red">\n\n              {{ \'PasswordPage.CONFIRMATION\' | translate}}\n\n          </p>\n\n          <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n          <div margin-top>\n\n            <button ion-button block class="button-middle" type="submit" [disabled]="!pword ||\n\n                        !confirmation_pword ||\n\n                        pword != confirmation_pword">\n\n              {{ \'PasswordPage.BTN_ONAYLA\' | translate}}\n\n            </button>\n\n          </div>\n\n        </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/password/password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__make_appointment_1_make_appointment_1__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(29);
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
            selector: 'page-success-activation',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/success-activation/success-activation.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n        {{ \'SuccessActivationPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div padding text-center>\n\n        <div class="logo primary-bg">\n\n            <img src="/assets/imgs/loginDoktor.png"/>\n\n        </div>\n\n        <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n          <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n          {{ \'SuccessActivationPage.COMPLETE\' | translate}}\n\n      </h5>\n\n      </div>\n\n\n\n    <button ion-button class="button-middle" (click)="makeappointment()">\n\n        {{ \'SuccessActivationPage.BTN_BASLA\' | translate}}\n\n    </button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/success-activation/success-activation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], SuccessActivationPage);
    return SuccessActivationPage;
}());

//# sourceMappingURL=success-activation.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
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
        localStorage.setItem("name_register", this.name);
        localStorage.setItem("surname_register", this.surname);
        localStorage.setItem("email_register", this.email);
        localStorage.setItem("gender_register", this.gender);
        localStorage.setItem("city_register", this.city);
        localStorage.setItem("district_register", this.district);
        localStorage.setItem("want_to_add", this.text);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */]);
    };
    MakeAppointment_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-1',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'MakeAppointment1Page.TITLE\' | translate}} (1/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center>\n\n            {{\'MakeAppointment1Page.TEMEL_BILGILER\' | translate}}\n\n        </div>\n\n      </ion-card>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'MakeAppointment1Page.ADINIZ\' | translate}}</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" name="name" placeholder="{{ \'MakeAppointment1Page.LUTFEN_ADINIZI_YAZINIZ\' | translate}}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'MakeAppointment1Page.SOYADINIZ\' | translate}}</ion-label>\n\n          <ion-input type="text" [(ngModel)]="surname" name="surname" placeholder="">{{ \'MakeAppointment1Page.LUTEFN_SOYADINIZI_YAZINIZ\' | translate}}\n\n          </ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'MakeAppointment1Page.EPOSTA_ADRESINIZ\' | translate}}</ion-label>\n\n          <ion-input type="email" [(ngModel)]="email" name="email" placeholder="{{ \'MakeAppointment1Page.LUTFEN_EPOSTA\' | translate}}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'MakeAppointment1Page.CINSIYETINIZ\' | translate}}</ion-label>\n\n            <ion-select [(ngModel)]="gender" name="gender" ngDefaultControl>\n\n              <ion-option value="male">{{ \'MakeAppointment1Page.BAY\' | translate}}</ion-option>\n\n              <ion-option value="female">{{ \'MakeAppointment1Page.BAYAN\' | translate}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment1Page.YASADINGINIZ_IL\' | translate}}</ion-label>\n\n            <ion-select [(ngModel)]="city" name="city" ngDefaultControl>\n\n              <ion-option value="Adana">Adana</ion-option>\n\n              <ion-option value="Adıyaman">Adıyaman</ion-option>\n\n              <ion-option value="Afyonkarahisar">Afyonkarahisar</ion-option>\n\n              <ion-option value="Ağrı">Ağrı</ion-option>\n\n              <ion-option value="Amasya">Amasya</ion-option>\n\n              <ion-option value="Ankara">Ankara</ion-option>\n\n              <ion-option value="Antalya">Antalya</ion-option>\n\n              <ion-option value="Artvin">Artvin</ion-option>\n\n              <ion-option value="Aydın">Aydın</ion-option>\n\n              <ion-option value="Balıkesir">Balıkesir</ion-option>\n\n              <ion-option value="Bilecik">Bilecik</ion-option>\n\n              <ion-option value="Bingöl">Bingöl</ion-option>\n\n              <ion-option value="Bitlis">Bitlis</ion-option>\n\n              <ion-option value="Bolu">Bolu</ion-option>\n\n              <ion-option value="Burdur">Burdur</ion-option>\n\n              <ion-option value="Bursa">Bursa</ion-option>\n\n              <ion-option value="Çanakkale">Çanakkale</ion-option>\n\n              <ion-option value="Çankırı">Çankırı</ion-option>\n\n              <ion-option value="Çorum">Çorum</ion-option>\n\n              <ion-option value="Denizli">Denizli</ion-option>\n\n              <ion-option value="Diyarbakır">Diyarbakır</ion-option>\n\n              <ion-option value="Edirne">Edirne</ion-option>\n\n              <ion-option value="Elazığ">Elazığ</ion-option>\n\n              <ion-option value="Erzincan">Erzincan</ion-option>\n\n              <ion-option value="Erzurum">Erzurum</ion-option>\n\n              <ion-option value="Eskişehir">Eskişehir</ion-option>\n\n              <ion-option value="Gaziantep">Gaziantep</ion-option>\n\n              <ion-option value="Giresun">Giresun</ion-option>\n\n              <ion-option value="Gümüşhane">Gümüşhane</ion-option>\n\n              <ion-option value="Hakkari">Hakkari</ion-option>\n\n              <ion-option value="Hatay">Hatay</ion-option>\n\n              <ion-option value="Isparta">Isparta</ion-option>\n\n              <ion-option value="Mersin">Mersin</ion-option>\n\n              <ion-option value="İstanbul">İstanbul</ion-option>\n\n              <ion-option value="İzmir">İzmir</ion-option>\n\n              <ion-option value="Kars">Kars</ion-option>\n\n              <ion-option value="Kastamonu">Kastamonu</ion-option>\n\n              <ion-option value="Kayseri">Kayseri</ion-option>\n\n              <ion-option value="Kırklareli">Kırklareli</ion-option>\n\n              <ion-option value="Kırşehir">Kırşehir</ion-option>\n\n              <ion-option value="Kocaeli">Kocaeli</ion-option>\n\n              <ion-option value="Konya">Konya</ion-option>\n\n              <ion-option value="Kütahya">Kütahya</ion-option>\n\n              <ion-option value="Malatya">Malatya</ion-option>\n\n              <ion-option value="Manisa">Manisa</ion-option>\n\n              <ion-option value="Kahramanmaraş">Kahramanmaraş</ion-option>\n\n              <ion-option value="Mardin">Mardin</ion-option>\n\n              <ion-option value="Muğla">Muğla</ion-option>\n\n              <ion-option value="Muş">Muş</ion-option>\n\n              <ion-option value="Nevşehir">Nevşehir</ion-option>\n\n              <ion-option value="Niğde">Niğde</ion-option>\n\n              <ion-option value="Ordu">Ordu</ion-option>\n\n              <ion-option value="Rize">Rize</ion-option>\n\n              <ion-option value="Sakarya">Sakarya</ion-option>\n\n              <ion-option value="Samsun">Samsun</ion-option>\n\n              <ion-option value="Siirt">Siirt</ion-option>\n\n              <ion-option value="Sinop">Sinop</ion-option>\n\n              <ion-option value="Sivas">Sivas</ion-option>\n\n              <ion-option value="Tekirdağ">Tekirdağ</ion-option>\n\n              <ion-option value="Tokat">Tokat</ion-option>\n\n              <ion-option value="Trabzon">Trabzon</ion-option>\n\n              <ion-option value="Tunceli">Tunceli</ion-option>\n\n              <ion-option value="Şanlıurfa">Şanlıurfa</ion-option>\n\n              <ion-option value="Uşak">Uşak</ion-option>\n\n              <ion-option value="Van">Van</ion-option>\n\n              <ion-option value="Yozgat">Yozgat</ion-option>\n\n              <ion-option value="Zonguldak">Zonguldak</ion-option>\n\n              <ion-option value="Aksaray">Aksaray</ion-option>\n\n              <ion-option value="Bayburt">Bayburt</ion-option>\n\n              <ion-option value="Karaman">Karaman</ion-option>\n\n              <ion-option value="Kırıkkale">Kırıkkale</ion-option>\n\n              <ion-option value="Batman">Batman</ion-option>\n\n              <ion-option value="Şırnak">Şırnak</ion-option>\n\n              <ion-option value="Bartın">Bartın</ion-option>\n\n              <ion-option value="Ardahan">Ardahan</ion-option>\n\n              <ion-option value="Iğdır">Iğdır</ion-option>\n\n              <ion-option value="Yalova">Yalova</ion-option>\n\n              <ion-option value="Karabük">Karabük</ion-option>\n\n              <ion-option value="Kilis">Kilis</ion-option>\n\n              <ion-option value="Osmaniye">Osmaniye</ion-option>\n\n              <ion-option value="Düzce">Düzce</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment1Page.YASADIGINIZ_ILCE\' | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="district" name="district" placeholder="{{ \'MakeAppointment1Page.LUTFEN_YASADIGINIZ_ILCE\' | translate}}"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment1Page.EK\' | translate}}</ion-label>\n\n          <ion-textarea rows="4" [(ngModel)]="text" name="text" autosize placeholder="{{ \'MakeAppointment1Page.EKLEMEK_ISTEDIKLERINIZ\' | translate}}"></ion-textarea>\n\n        </ion-item>\n\n        <button ion-button class="button-middle" (click)="nextStep_1()"  [disabled]="!name || !surname || !email || !gender || !city || !district">{{ \'MakeAppointment1Page.BTN_SONRAKI\' | translate}}</button>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-1/make-appointment-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MakeAppointment_1Page);
    return MakeAppointment_1Page;
}());

//# sourceMappingURL=make-appointment-1.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__make_appointment_3_make_appointment_3__ = __webpack_require__(222);
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
    MakeAppointment_2Page.prototype.changePicture1 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture1();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture1();
                    }
                },
                {
                    text: 'Cancel',
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
    MakeAppointment_2Page.prototype.changePicture2 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture2();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture2();
                    }
                },
                {
                    text: 'Cancel',
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
    MakeAppointment_2Page.prototype.changePicture3 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture3();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture3();
                    }
                },
                {
                    text: 'Cancel',
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
    MakeAppointment_2Page.prototype.changePicture4 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture4();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture4();
                    }
                },
                {
                    text: 'Cancel',
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
    MakeAppointment_2Page.prototype.changePicture5 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture5();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture5();
                    }
                },
                {
                    text: 'Cancel',
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
    MakeAppointment_2Page.prototype.takePicture1 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture1 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.takePicture2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture2 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.takePicture3 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture3 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.takePicture4 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture4 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.takePicture5 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture5 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture1 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture1 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture2 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture3 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture3 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture4 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture4 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.getPicture5 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture5 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_2Page.prototype.nextStep_2 = function () {
        localStorage.setItem("ch1", this.chosenPicture1);
        localStorage.setItem("ch2", this.chosenPicture2);
        localStorage.setItem("ch3", this.chosenPicture3);
        localStorage.setItem("ch4", this.chosenPicture4);
        localStorage.setItem("ch5", this.chosenPicture5);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */]);
    };
    MakeAppointment_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-2',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'MakeAppointment2Page.TITLE\' | translate}} (2/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>\n\n            <h1 class="h1">{{ \'MakeAppointment2Page.FOTOGRAF_YUKLEME\' | translate}}\n\n            </h1><br>\n\n            {{ \'MakeAppointment2Page.FOTOGRAFLARINIZI_CEKINIZ\' | translate}}\n\n        </div>\n\n      </ion-card>  <br><br>\n\n      <h5 class="h5">\n\n          1. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}\n\n      </h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/resim1.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture1" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>\n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture1()">1. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n        <br><br>\n\n        <h5 class="h5">2. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/resim3.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <ion-avatar >\n\n                   <img [src]="chosenPicture2" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>\n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture2()">2. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n        <br><br>\n\n        <h5 class="h5">3. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/resim2.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <ion-avatar >\n\n                    <img [src]="chosenPicture3" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>\n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture3()">3. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n        <br><br>\n\n        <h5 class="h5">4. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/resim4.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <ion-avatar >\n\n                     <img [src]="chosenPicture4"  onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                  </ion-avatar>\n\n              </ion-card>\n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture4()">4. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n        <br><br>\n\n        <h5 class="h5">5. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</h5>\n\n      <ion-grid>\n\n          <ion-row center>\n\n            <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                  <img src="/assets/imgs/resim5.png"/>\n\n              </ion-card>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n              <ion-card>\n\n                <ion-avatar >\n\n                   <img [src]="chosenPicture5" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                </ion-avatar>\n\n              </ion-card>\n\n        </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button class="button-middle" (click)="changePicture5()">5. {{ \'MakeAppointment2Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n        <br><br><br><br>\n\n        <button ion-button class="button-nextStep" (click)="nextStep_2()">{{ \'MakeAppointment2Page.BTN_NEXT\' | translate}}</button>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-2/make-appointment-2.html"*/,
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

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__make_appointment_4_make_appointment_4__ = __webpack_require__(223);
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
    function MakeAppointment_3Page(navCtrl, navParams, cameraProvider, loadingCtrl, platform, actionsheetCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraProvider = cameraProvider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.http = http;
        this.name = localStorage.getItem("name_register");
        this.surname = localStorage.getItem("surname_register");
        this.gender = localStorage.getItem("gender_register");
        this.email = localStorage.getItem("email_register");
        this.city = localStorage.getItem("city_register");
        this.district = localStorage.getItem("district_register");
        this.text = localStorage.getItem("want_to_add");
        this.chosenPicture1 = localStorage.getItem("ch1");
        this.chosenPicture2 = localStorage.getItem("ch2");
        this.chosenPicture3 = localStorage.getItem("ch3");
        this.chosenPicture4 = localStorage.getItem("ch4");
        this.chosenPicture5 = localStorage.getItem("ch5");
    }
    MakeAppointment_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeAppointment_3Page');
    };
    // Şunları da kopyalayıver.
    MakeAppointment_3Page.prototype.changePicture1 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture1();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture1();
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
    MakeAppointment_3Page.prototype.changePicture2 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture2();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture2();
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
    MakeAppointment_3Page.prototype.changePicture3 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture3();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture3();
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
    MakeAppointment_3Page.prototype.changePicture4 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture4();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture4();
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
    MakeAppointment_3Page.prototype.changePicture5 = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Fotoğraf Yükle',
            buttons: [
                {
                    text: 'Kamera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.takePicture5();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'gallery' : 'Galeri',
                    icon: !this.platform.is('ios') ? 'image' : null,
                    handler: function () {
                        _this.getPicture5();
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
    MakeAppointment_3Page.prototype.takePicture1 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture1 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.takePicture2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture2 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.takePicture3 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture3 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.takePicture4 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture4 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.takePicture5 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture5 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture1 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture1 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture2 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture2 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture3 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture3 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture4 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture4 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.getPicture5 = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture5 = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    MakeAppointment_3Page.prototype.postData = function () {
        // Create credentials.
        var formData = new FormData();
        formData.append("action", "register");
        formData.append("name", this.name);
        formData.append("surname", this.surname);
        formData.append("email", this.email);
        formData.append("tel_no", localStorage.getItem("tel_no"));
        formData.append("password", localStorage.getItem("password"));
        formData.append("gender", this.gender);
        formData.append("city", this.city);
        formData.append("district", this.district);
        formData.append("text", this.text);
        formData.append("chosenpicture1", this.chosenPicture1);
        formData.append("chosenpicture2", this.chosenPicture2);
        formData.append("chosenpicture3", this.chosenPicture3);
        formData.append("chosenpicture4", this.chosenPicture4);
        formData.append("chosenpicture5", this.chosenPicture5);
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/make-appointment.php", formData).subscribe(function respond() {
        });
    };
    MakeAppointment_3Page.prototype.create_appointment = function () {
        this.postData();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */]);
    };
    MakeAppointment_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-make-appointment-3',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'MakeAppointment3Page.TITLE\' | translate}} (3/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <div class="card-title" text-center><br>\n\n          <h1 class="h1">{{ \'MakeAppointment3Page.BILGILERINIZI_KONTROL\' | translate}} </h1>\n\n        <br>{{ \'MakeAppointment3Page.LUTFEN_BILGILERINIZI_SON_KEZ\' | translate}}</div>\n\n    </ion-card><br><br>\n\n\n\n\n\n        <ion-label stacked  style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.ADINIZ\' | translate}}</ion-label>\n\n        <h5>{{name}}</h5>\n\n\n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221); ">{{ \'MakeAppointment3Page.SOYADINIZ\' | translate}}</ion-label>\n\n        <h5>{{surname}}</h5>\n\n\n\n\n\n        <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.EPOSTA_ADRESINIZ\' | translate}}</ion-label>\n\n        <h5>{{email}}</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.CINSIYETINIZ\' | translate}}</ion-label>\n\n        <h5>{{gender}}</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.YASADIGINIZ_IL\' | translate}}</ion-label>\n\n        <h5>{{city}}</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.YASADIGINIZ_ILCE\' | translate}}</ion-label>\n\n        <h5>{{district}}</h5>\n\n\n\n        <ion-label style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'MakeAppointment3Page.EK\' | translate}}</ion-label>\n\n        <h5>{{text}}</h5>\n\n\n\n        <h5 class="h5">1. {{\'MakeAppointment3Page.FOTOGRAF\' | translate}} </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/resim1.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture1" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>\n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture1()">1. {{\'MakeAppointment3Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n          <br><br>\n\n          <h5 class="h5">2. {{\'MakeAppointment3Page.FOTOGRAF\' | translate}} </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/resim3.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture2" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>\n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture2()">2. {{\'MakeAppointment3Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n          <br><br>\n\n          <h5 class="h5">3. {{\'MakeAppointment3Page.FOTOGRAF\' | translate}} </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/resim2.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <ion-avatar >\n\n                        <img [src]="chosenPicture3" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>\n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture3()">3. {{\'MakeAppointment3Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n          <br><br>\n\n          <h5 class="h5">4. {{\'MakeAppointment3Page.FOTOGRAF\' | translate}} </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/resim4.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <ion-avatar >\n\n                      <img [src]="chosenPicture4" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                   </ion-avatar>\n\n                </ion-card>\n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture4()">4. {{\'MakeAppointment3Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n          <br><br>\n\n          <h5 class="h5">5. {{\'MakeAppointment3Page.FOTOGRAF\' | translate}} </h5>\n\n        <ion-grid>\n\n            <ion-row center>\n\n              <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <img src="/assets/imgs/resim5.png"/>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6 no-padding>\n\n                <ion-card>\n\n                    <ion-avatar >\n\n                       <img [src]="chosenPicture5" onerror="this.src=\'/assets/imgs/picture.png\'" />\n\n                    </ion-avatar>\n\n                </ion-card>\n\n          </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <button ion-button class="button-middle" (click)="changePicture5()">5. {{\'MakeAppointment3Page.FOTOGRAF_EKLE\' | translate}}</button>\n\n          <br><br><br><br>\n\n\n\n          <button ion-button class="button-edit-information" (click)="create_appointment()">{{\'MakeAppointment3Page.BTN_RANDEVUYU_OLUSTUR\' | translate}}</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-3/make-appointment-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_providers_camera_provider__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], MakeAppointment_3Page);
    return MakeAppointment_3Page;
}());

//# sourceMappingURL=make-appointment-3.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeAppointment_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appointments_appointments__ = __webpack_require__(109);
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
            selector: 'page-make-appointment-4',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'MakeAppointment4Page.TITLE\' | translate}} (4/4)</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card class="card-parent">\n\n        <img src="/assets/imgs/clearfix.png"/>\n\n        <div class="card-title" text-center> <br>{{ \'MakeAppointment4Page.TEBRIKLER\' | translate}}<br>{{ \'MakeAppointment4Page.RANDEVUNUZ_BASARLI\' | translate}} </div>\n\n      </ion-card>\n\n      <br><br>\n\n      <button ion-button class="button-middle" (click)="appointments()">{{ \'MakeAppointment4Page.BTN_RANDEVULARIMA_GIT\' | translate}}</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/make-appointment-4/make-appointment-4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], MakeAppointment_4Page);
    return MakeAppointment_4Page;
}());

//# sourceMappingURL=make-appointment-4.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/login-user.php", formData).subscribe(function respond(res) {
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
                    localStorage.setItem('user_authority', '0');
                    localStorage.setItem("id", json_result['id']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]); // After the authentication is complete, redirect to the main page.
                }
            });
        }
    };
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login-user',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/login-user/login-user.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>{{ \'LoginUserPage.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n          <div padding text-center>\n\n            <div class="logo primary-bg">\n\n                <img src="/assets/imgs/loginDoktor.png"/>\n\n            </div>\n\n            <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n               {{\'LoginUserPage.BTN_LOGIN\' | translate}}\n\n              \n\n          </h5>\n\n          </div>\n\n\n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'LoginUserPage.TEL\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user_data" type="text" >\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_user}}</ion-label>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{ \'LoginUserPage.PWORD\' | translate}}:</ion-label>\n\n                <ion-input [(ngModel)]="pass_data" type="password">\n\n                </ion-input>\n\n                <ion-label style="font-size:14px; color:red">{{warning_pass}}</ion-label>\n\n              </ion-item>\n\n\n\n\n\n            <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n            <div margin-top>\n\n              <button (click)="userLogin()" ion-button block class="button-middle" type="submit">\n\n                {{ \'LoginUserPage.BTN_LOGIN\' | translate}}\n\n              </button>\n\n            </div>\n\n\n\n\n\n</ion-content>\n\ns'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/login-user/login-user.html"*/,
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_doctor_login_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(29);
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/signup-doctor.php", formData).subscribe(function respond(res) {
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
                localStorage.setItem('user_authority', '1');
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
            selector: 'page-register-doctor',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/register-doctor/register-doctor.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="tabColor">\n\n        <ion-title text-center>\n\n            {{\'RegisterDoctorPage.TITLE\' | translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div col-lg-4 class="login-content card" padding="padding">\n\n        <!--logo-->\n\n        <div padding text-center="text-center">\n\n            <div class="logo primary-bg">\n\n                <img src="/assets/imgs/loginDoktor.png"/>\n\n            </div>\n\n            <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n                {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}}\n\n            </h5>\n\n        </div>\n\n        <!-- Login form -->\n\n        <ion-list class="list-form list-no-border">\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'RegisterDoctorPage.NAME\' | translate}}</ion-label>\n\n                <ion-input type="text" [(ngModel)]="name" required="required"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'RegisterDoctorPage.KULLANICI_AD\' | translate}}</ion-label>\n\n                <ion-input type="text" [(ngModel)]="uname"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'RegisterDoctorPage.EMAIL\' | translate}}</ion-label>\n\n                <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'RegisterDoctorPage.PWORD\' | translate}}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="pword"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label stacked style="font-size:18px; font-weight: bold; color:rgb(101, 183, 221);">{{\'RegisterDoctorPage.SIFRE_ONAYLAYINIZ\' | translate}}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="confirmation_pword"></ion-input>\n\n\n\n            </ion-item>\n\n            <p *ngIf="pword != confirmation_pword &&  confirmation_pword " style="font-size: 12px;color: red">\n\n\n\n                {{\'RegisterDoctorPage.CONFIRMATION\' | translate}}\n\n            </p>\n\n        </ion-list>\n\n\n\n        <!--<p text-right ion-text color="light">Forgot Password?</p>-->\n\n        <ion-checkbox  [(ngModel)]="chk1" style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label >{{\'RegisterDoctorPage.LICENSE\' | translate}}\n\n        </ion-label>\n\n\n\n        <ion-checkbox  [(ngModel)]="chk2" style="float:left;margin-right:8px; color:rgb(101, 183, 221);"></ion-checkbox>\n\n        <ion-label>{{ \'NewAccountPage.TERMS_RIGHTS1\' | translate}} <br>\n\n            {{ \'NewAccountPage.TERMS_RIGHTS2\' | translate}} <a>Clearfix</a> <br>\n\n            {{ \'NewAccountPage.TERMS_RIGHTS3\' | translate}}</ion-label>\n\n\n\n        <div margin-top="margin-top">\n\n            <button ion-button block class="button-middle" (click)="register()" [disabled]="!name || !uname || !email || !pword || !confirmation_pword || !chk1 || !chk2 || pword != confirmation_pword   ">\n\n                {{\'RegisterDoctorPage.BTN_KAYDOL\' | translate}}\n\n            </button>\n\n        </div>\n\n\n\n        <!-- Other links -->\n\n        <div text-center margin-top>\n\n            <span ion-text (click)="login()">\n\n                {{\'RegisterDoctorPage.HESABIN_VAR_MI\' | translate}}\n\n            </span>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/register-doctor/register-doctor.html"*/,
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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_list_id_list__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/category.php", formData).subscribe(function response(res) {
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
            selector: 'page-category',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/category/category.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center>\n\n        {{ \'CategoryPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid >\n\n        <ion-row>\n\n          <ion-col col-6>\n\n\n\n           <ion-card class="cardColor" (click)="userList(0)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="list-box" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center>\n\n                    <b class="bfont">\n\n                        {{ \'CategoryPage.TUM_VAKALAR\' | translate}}\n\n                    </b>\n\n                </h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[0]}}</b></h1>\n\n              </div>\n\n           </ion-card>\n\n\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <ion-card class="cardColor" (click)="userList(1)">\n\n                <div class="divIcon">\n\n                    <ion-icon name="custom-ruler" color="tabColor"></ion-icon>\n\n                </div>\n\n                <div>\n\n                    <h3 text-center>\n\n                        <b class="bfont">\n\n                            {{ \'CategoryPage.OLCULER\' | translate}}\n\n                        </b>\n\n                    </h3>\n\n                </div>\n\n                <div>\n\n                  <br>\n\n                  <h1 text-center><b>{{rows[1]}}</b></h1>\n\n                </div>\n\n             </ion-card>\n\n      </ion-col >\n\n      <ion-col col-6>\n\n          <ion-card class="cardColor" (click)="userList(2)">\n\n              <div class="divIcon">\n\n                  <ion-icon name="qr-scanner" color="tabColor"></ion-icon>\n\n              </div>\n\n              <div>\n\n                <h3 text-center>\n\n                    <b class="bfont">\n\n                        {{ \'CategoryPage.TARAMA\' | translate}}\n\n                    </b>\n\n                </h3>\n\n              </div>\n\n              <div>\n\n                <br>\n\n                <h1 text-center><b>{{rows[2]}}</b></h1>\n\n              </div>\n\n           </ion-card>\n\n    </ion-col >\n\n    <ion-col col-6>\n\n        <ion-card class="cardColor" (click)="userList(3)">\n\n            <div class="divIcon">\n\n                <ion-icon name="custom-register" color="tabColor"></ion-icon>\n\n\n\n            </div>\n\n            <div>\n\n              <h3 text-center><b class="bfont">\n\n                  {{ \'CategoryPage.KAYIT\' | translate}}\n\n              </b></h3>\n\n            </div>\n\n            <div>\n\n              <br>\n\n              <h1 text-center><b>{{rows[3]}}</b></h1>\n\n            </div>\n\n         </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(4)">\n\n          <div class="divIcon">\n\n              <ion-icon name="cog" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Set-Up</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[4]}}</b></h1>\n\n          </div>\n\n       </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(5)">\n\n          <div class="divIcon">\n\n              <ion-icon name="custom-plan" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">\n\n                {{ \'CategoryPage.PLANLAMA\' | translate}}\n\n            </b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[5]}}</b></h1>\n\n          </div>\n\n       </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(6)">\n\n          <div class="divIcon">\n\n              <ion-icon name="log-out" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">Export</b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[6]}}</b></h1>\n\n          </div>\n\n       </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(7)">\n\n          <div class="divIcon">\n\n              <ion-icon name="color-fill" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">\n\n                {{ \'CategoryPage.PCT\' | translate}}\n\n            </b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[7]}}</b></h1>\n\n          </div>\n\n       </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n    <ion-card class="cardColor" (click)="userList(8)">\n\n        <div class="divIcon">\n\n            <ion-icon name="custom-truck" color="tabColor"></ion-icon>\n\n        </div>\n\n        <div>\n\n          <h3 text-center><b class="bfont">\n\n              {{ \'CategoryPage.KARGODA\' | translate}}\n\n          </b></h3>\n\n        </div>\n\n        <div>\n\n          <br>\n\n          <h1 text-center><b>{{rows[8]}}</b></h1>\n\n        </div>\n\n     </ion-card>\n\n  </ion-col >\n\n  <ion-col col-6>\n\n      <ion-card class="cardColor" (click)="userList(9)">\n\n          <div class="divIcon">\n\n              <ion-icon name="checkbox" color="tabColor"></ion-icon>\n\n          </div>\n\n          <div>\n\n            <h3 text-center><b class="bfont">\n\n                {{ \'CategoryPage.TAMAMLANMIS\' | translate}}\n\n            </b></h3>\n\n          </div>\n\n          <div>\n\n            <br>\n\n            <h1 text-center><b>{{rows[9]}}</b></h1>\n\n          </div>\n\n       </ion-card>\n\n    </ion-col >\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/category/category.html"*/,
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

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_list_ticket_list__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/id-list.php", formData).subscribe(function response(res) {
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
            selector: 'page-id-list',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/id-list/id-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title>{{\'IdListPage.TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <div>\n\n     <ion-searchbar (ionInput)="getItems($event)" placeholder="Ara"></ion-searchbar>\n\n  </div> -->\n\n    <ion-card no-padding style="box-shadow: none;">\n\n        <ion-card-content>\n\n            <b style="font-size:25px; color:rgb(101, 183, 221);">{{\'IdListPage.LIST\' | translate}}</b>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card *ngFor="let ticket of tickets" (click)="ticket_send(ticket)">\n\n          <ion-card-header>\n\n            <b> {{ticket.id}}: {{ticket.subject}} </b>\n\n          </ion-card-header>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/id-list/id-list.html"*/,
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_with_doctor_chat_with_doctor__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulation_simulation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(32);
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
    function TicketListPage(navCtrl, navParams, http, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
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
    TicketListPage.prototype.goToChat = function () {
        var _this = this;
        this.translateContentChat(function (translatedContent) {
            _this.postData(function (json_result) {
                if (json_result['message'] == 'success') {
                    localStorage.setItem("chatval", json_result['id']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: translatedContent,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        });
    };
    TicketListPage.prototype.translateContentChat = function (callback) {
        var translatedContent;
        this.translate.get("TicketListPage.CHAT_MESSAGE").subscribe(function (value) {
            translatedContent = value;
            console.log(translatedContent);
            callback(translatedContent);
        });
    };
    TicketListPage.prototype.translateContentSimulation = function (callback) {
        var translatedContent;
        this.translate.get("TicketListPage.SIMUL_MESSAGE").subscribe(function (value) {
            translatedContent = value;
            console.log(translatedContent);
            callback(translatedContent);
        });
    };
    TicketListPage.prototype.goToSimulation = function () {
        var _this = this;
        this.translateContentSimulation(function (translatedContent) {
            _this.postDataSimulation(function (json_result) {
                if (json_result['message'] == 'success') {
                    localStorage.setItem("simulation", json_result['url']);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__simulation_simulation__["a" /* SimulationPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: translatedContent,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            });
        });
    };
    TicketListPage.prototype.postDataSimulation = function (callback) {
        var formData = new FormData();
        formData.append("action", "simulate");
        formData.append("id", this.ticket['id']);
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/ticket-list.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    TicketListPage.prototype.postData = function (callback) {
        var formData = new FormData();
        formData.append("action", "detect");
        formData.append("subject", this.ticket['subject']);
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/ticket-list.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            console.log(json_result);
            callback(json_result);
        });
    };
    TicketListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-list',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/ticket-list/ticket-list.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="tabColor">\n\n    <ion-title >\n\n        {{ \'TicketListPage.TITLE\' | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <ion-grid>\n\n\n\n    <ion-row center>\n\n      <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n              ID\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n             <b style="font-size:20px;">{{ticket.id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-col>\n\n      <ion-col col-6 no-padding>\n\n          <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                {{ \'TicketListPage.ONCELIK\' | translate}}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-badge color="danger" style="font-size:18px;">{{ticket.priority}}</ion-badge>\n\n            </ion-card-content>\n\n          </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n          <ion-card-header style="font-size:20px;">\n\n              {{ \'TicketListPage.KONU\' | translate}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <b style="font-size:18px;">{{ticket.subject}}</b>\n\n          </ion-card-content>\n\n        </ion-card>\n\n  </ion-col>\n\n    <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                {{ \'TicketListPage.KATEGORI\' | translate}}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.cat_id}}</b>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n            <ion-card-header style="font-size:20px;">\n\n                {{ \'TicketListPage.OLUSTURULDU\' | translate}}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <b style="font-size:16px;">{{ticket.create_time | date: short}}</b>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6 no-padding>\n\n        <ion-card text-center class="cardColor">\n\n        <ion-card-header style="font-size:20px;">\n\n            {{ \'TicketListPage.GUNCELLENDI\' | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <b style="font-size:16px;">{{ticket.update_time | date: short}}</b>\n\n        </ion-card-content>\n\n        </ion-card>\n\n   </ion-col>\n\n   <ion-col col-6 no-padding>\n\n      <ion-card text-center class="cardColor">\n\n      <ion-card-header style="font-size:20px;">\n\n          {{ \'TicketListPage.ADIM\' | translate}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-badge color="secondary" style="font-size:18px;">{{ticket.step}}</ion-badge>\n\n      </ion-card-content>\n\n      </ion-card>\n\n     </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card text-center class="cardColor">\n\n        <ion-card-content>\n\n            <button (click)="goToChat();" ion-button color="secondary" style="font-size:18px;">\n\n                {{ \'TicketListPage.BTN_CHAT\' | translate}}\n\n            </button>\n\n            <button (click)="goToSimulation();" ion-button color="secondary" style="font-size:18px;">\n\n                {{ \'TicketListPage.BTN_SIMULATION\' | translate}}\n\n            </button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/ticket-list/ticket-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], TicketListPage);
    return TicketListPage;
}());

//# sourceMappingURL=ticket-list.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appointments_appointments__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_account_new_account__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sms_otp_sms_otp__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_doctor_login_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_doctor_register_doctor__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_user_login_user__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ticket_list_ticket_list__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_timer_timer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_simulation_simulation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_category_category__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_password_password__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chat_with_doctor_chat_with_doctor__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_success_activation_success_activation__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_1_make_appointment_1__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_2_make_appointment_2__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_make_appointment_3_make_appointment_3__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_make_appointment_4_make_appointment_4__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ngx_translate_http_loader__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_id_list_id_list__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__app_providers_camera_provider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_local_notifications__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Cordova



// import pages




























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_31__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_30__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (setTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_account_new_account__["a" /* NewAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sms_otp_sms_otp__["a" /* SmsOtpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_doctor_login_doctor__["a" /* LoginDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_doctor_register_doctor__["a" /* RegisterDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ticket_list_ticket_list__["a" /* TicketListPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_simulation_simulation__["a" /* SimulationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_chat_with_doctor_chat_with_doctor__["a" /* ChatWithDoctorPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_id_list_id_list__["a" /* IdListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_success_activation_success_activation__["a" /* SuccessActivationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_make_appointment_1_make_appointment_1__["a" /* MakeAppointment_1Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_make_appointment_2_make_appointment_2__["a" /* MakeAppointment_2Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_make_appointment_3_make_appointment_3__["a" /* MakeAppointment_3Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_make_appointment_4_make_appointment_4__["a" /* MakeAppointment_4Page */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_35__app_providers_camera_provider__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_progress_timer_progress__ = __webpack_require__(289);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(313);
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
    function TimerProgress(sanitizer, http, notification) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.http = http;
        this.notification = notification;
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
        this.getPlakSayisi();
        var d = new Date();
        d.setMonth(d.getMonth() + 1);
    }
    TimerProgress.prototype.ngOnInit = function () {
    };
    TimerProgress.prototype.ifPhoto = function () {
        if (this.plak_sayisi > 1 && this.plak_sayisi % 2 == 1) {
            return true;
        }
        else {
            return false;
        }
        // localStorage.getItem("isPhoto")
    };
    TimerProgress.prototype.addPhotos = function () {
    };
    TimerProgress.prototype.getPlakSayisi = function () {
        var _this = this;
        this.postDataPlakSayisi(function (json_result) {
            console.log(json_result);
            if (json_result['message'] === 'success') {
                _this.plak_sayisi = json_result['plak_sayisi'];
                _this.plak_sayisi++;
            }
            else {
            }
        });
    };
    TimerProgress.prototype.postDataPlakSayisi = function (callback) {
        var formData = new FormData();
        formData.append("action", "load");
        formData.append("id", localStorage.getItem("id"));
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/plak_sayisi.php", formData).subscribe(function response(res) {
            var json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
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
        if (this.plak_sayisi % 2 == 1) {
            this.isPhoto = true;
        }
        //plak_sayisi++ ve db'e ekle 
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
        //triggered notification
        var d = new Date();
        d.setMonth(d.getMonth() + 1);
        this.notification.schedule({
            title: 'Clearfix',
            text: 'Lütfen Değiştirme Süresi sayfasından yeni fotoğraflarınızı yükleyin.',
            trigger: { at: d },
            led: 'FF0000',
        });
    };
    TimerProgress.prototype.postDataSend = function () {
        var formData = new FormData();
        formData.append("action", "send");
        formData.append("id", localStorage.getItem("id"));
        formData.append("time", "1209600");
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/timer.php", formData).subscribe(function response(res) {
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
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/timer.php", formData).subscribe(function response(res) {
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
            selector: 'timer-progress',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/app/components/timer-progress/timer-progress.html"*/'<h1>{{plak_sayisi}}. PLAK</h1>\n\n<ion-card *ngIf="timer">\n\n    <button ion-button block *ngIf="!ifPhoto()" (click)="addPhotos()">ADD PHOTOS</button>\n\n	<ion-card-header>\n\n         <div class="radial-progress" data-progress="0">\n\n            <div class="circle">\n\n                <div class="mask full" [style.transform]="transform">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                </div>\n\n                <div class="mask half">\n\n                <div class="fill" [style.transform]="transform"></div>\n\n                <div class="fill fix" [style.transform]="fixTransform"></div>\n\n                </div>\n\n                <div class="shadow"></div>\n\n            </div>\n\n            <div class="inset">\n\n                <div class="percentage">{{timer.displayTime}}</div>\n\n            </div>\n\n        </div>\n\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Set Incorrectly</button>\n\n	</ion-card-header>\n\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0">\n\n		<button ion-button clear class="large" color="danger" (click)="initTimer()" item-start *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n            <ion-icon name="refresh"></ion-icon>\n\n            Reset\n\n        </button>\n\n		<button ion-button clear class="large" (click)="startTimer()" item-end *ngIf="!timer.hasStarted">\n\n            <ion-icon name="play"></ion-icon>\n\n            Start\n\n        </button>\n\n	</ion-item>\n\n</ion-card>'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/app/components/timer-progress/timer-progress.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _c || Object])
    ], TimerProgress);
    return TimerProgress;
    var _a, _b, _c;
}());

//# sourceMappingURL=timer-progress.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_account_new_account__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_user_login_user__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(32);
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
    function HomePage(navCtrl, loadingCtrl, http, translate) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.translate = translate;
        // Define the undefined values.
        if (!localStorage.getItem('isLoggedIn'))
            localStorage.setItem('isLoggedIn', 'false');
        if (!localStorage.getItem('language'))
            localStorage.setItem('language', 'tr');
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
        this.translate.use(localStorage.getItem('language'));
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
    };
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
            localStorage.setItem('user_authority', '');
            localStorage.setItem('surname', '');
            localStorage.setItem('id', '');
            _this.navCtrl.setRoot(HomePage_1);
        }, "logout");
    };
    HomePage.prototype.loginDoctor = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_doctor_login_doctor__["a" /* LoginDoctorPage */]);
    };
    HomePage.prototype.translateContent = function (callback) {
        var translatedContent;
        this.translate.get("HomePage.loader").subscribe(function (value) {
            translatedContent = value;
            callback(translatedContent);
        });
    };
    HomePage.prototype.accountCheck = function () {
        var _this = this;
        this.translateContent(function (translatedContent) {
            var loader = _this.loadingCtrl.create({
                content: translatedContent
            });
            loader.present();
            _this.postData(function (json_result) {
                loader.dismiss();
                if (json_result['message'] == 'not_logged_in') {
                    _this.account = false;
                }
                else {
                    _this.account = true;
                    _this.name = localStorage.getItem("name");
                    _this.surname = localStorage.getItem("surname");
                    _this.authority = localStorage.getItem("user_authority");
                }
            }, "check");
        });
    };
    HomePage.prototype.postData = function (callback, action) {
        // Create credentials.
        var json_result;
        var formData = new FormData();
        formData.append("action", action);
        formData.append("loginInfo", localStorage.getItem('isLoggedIn'));
        this.http.post("http://www.clearfix.com.tr/clearfix_new_app/home.php", formData).subscribe(function respond(res) {
            json_result = JSON.parse(res['_body']);
            callback(json_result);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="tabColor">\n\n    <ion-title text-center><b>CLEARFIX</b></ion-title>\n\n      <ion-buttons end *ngIf="account">\n\n          <button ion-button icon-only (click)="logoutUser()">\n\n            <ion-icon name="log-out"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n        <div padding text-center>\n\n            <div class="logo primary-bg">\n\n                <img src="/assets/imgs/loginDoktor.png"/>\n\n            </div>\n\n            <h5 style="font-weight: bold; color:rgb(101, 183, 221);">\n\n            <!-- {{\'RegisterDoctorPage.LUTFEN_FORMU_EKSIKSIZ_DOLDURUNUZ\' | translate}} -->\n\n            {{\'HomePage.WELCOME\' | translate}}\n\n        </h5>\n\n        </div>\n\n\n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="newAccount()">{{\'HomePage.BTN_YENI_HESAP_OLUSTUR\' | translate}}</button>\n\n      <button *ngIf="!account; else loggedIn" ion-button class="button-middle" (click)="loginUser()">{{\'HomePage.BTN_UYE_GIRISI\' | translate}}</button>\n\n      <ng-template #loggedIn>\n\n          <button *ngIf="authority == \'1\'" ion-button class="button-middle" (click)="goToCategories()">{{\'HomePage.BTN_KATEGORILERE_GIT\' | translate}}</button>\n\n      </ng-template>\n\n      <button *ngIf="!account" ion-button class="button-middle" (click)="loginDoctor()">{{\'HomePage.BTN_HEKIM_GIRISI\' | translate}}</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(210);
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
    function MyApp(platform, statusBar, splashScreen, translate) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.translate.setDefaultLang('tr');
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.backgroundColorByHexString("#0277BD");
            _this.splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/home/mekhti/workspace/ioncApps/CF/Clearfix/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map