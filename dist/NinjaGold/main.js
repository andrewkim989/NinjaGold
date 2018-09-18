(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <head>\n        <title>Ninja Gold (Ver. 3.0)</title>\n        \n        <link rel = \"stylesheet\"\n        href = \"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\"\n        integrity = \"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\n        crossorigin = \"anonymous\">\n        \n        <style>\n            #wrapper {\n              background-color: lightgrey;\n              padding: 15px;\n            }\n            #begin {\n              padding: 15px;\n              width: 400px;\n              text-align: center;\n              margin: auto;\n              background-color: rgb(146, 177, 89);\n              border-radius: 8px;\n            }\n            #begin h4 {\n                font-size: 22px;\n            }\n            #begin input[type = \"submit\"] {\n                background-color: rgb(41, 84, 201);\n                border: none;\n                color: white;\n                padding: 10px;\n                text-align: center;\n                text-decoration: none;\n                display: inline-block;\n                font-size: 16px;\n                margin: 4px 2px;\n                border-radius: 10px;\n                cursor: pointer;\n            }\n            h1 {\n              text-align: center;\n              padding: 5px;\n            }\n            h3 { \n                margin-left: 10px;\n            }\n            h5 {\n              margin-left: 15px;\n            }\n            #blueline{\n                background-color: blue;\n                height: 3px;\n            }\n            #count {\n                text-align: center;\n                margin: 10px;\n            }\n            #box1 {\n                margin: 25px;\n                padding: 20px;\n                width: 250px;\n                background-color:rgb(151, 81, 81);\n                color: white;\n                display: inline-block;\n                border-radius: 15px;\n                text-align: center;\n            }\n            #box2 {\n                margin: 25px;\n                padding: 20px;\n                width: 250px;\n                background-color:rgb(23, 36, 32);\n                color: white;\n                display: inline-block;\n                border-radius: 15px;\n                text-align: center;\n            }\n            #box3 {\n                margin: 25px;\n                padding: 20px;\n                width: 250px;\n                background-color:rgb(67, 78, 131);\n                color: white;\n                display: inline-block;\n                border-radius: 15px;\n                text-align: center;\n            } \n            #box4 {\n                margin: 25px;\n                padding: 20px;\n                width: 280px;\n                background-color:rgb(59, 187, 113);\n                color: white;\n                display: inline-block;\n                border-radius: 15px;\n                text-align: center;\n            }\n            h4 {\n                font-size: 36px;\n            }\n            p {\n                font-size: 18px;\n            }\n            button {\n                width: 120px;\n                font-size: 18px;\n                background-color: rgb(144, 153, 62);\n                color: white;\n                padding: 10px 16px;\n                margin: 0;\n                border: none;\n                border-radius: 8px;\n                cursor: pointer;\n            }\n            #activity {\n                margin-left: 30px;\n                height: 300px;\n                overflow: auto;\n            }\n            #emptyspace {\n                height: 30px;\n            }\n        </style>    \n    </head>\n\n    <body>\n        <div id = \"wrapper\">\n          <div id = \"begin\" *ngIf = \"start == false\">\n            <h4>Welcome to Ninja Gold 3.0!</h4><h4>Please type in your username below! </h4>\n            <form (submit) = \"startGame(username)\">\n              <input type = \"text\" name = \"username\" [(ngModel)] = \"username\"/><br><br>\n              <input type = \"submit\" value = \"Start Game!\"/>\n            </form>\n          </div>\n          <div id = \"main\" *ngIf = \"start\">\n            <h3><b>Instructions:</b></h3>\n            <h5>You are a ninja, and you need gold! To earn them, you will need to enter the\n            four buildings shown below by clicking on the \"Find Gold!\" buttons below. </h5>\n            <h5>You can earn a lot of gold if you enter the bank, but be careful!\n            You can lose a lot of gold as well! </h5>    \n            <h5>Have fun!</h5>\n\n            <div id = \"blueline\"></div>\n            <div id = \"count\">\n              <h3>Your gold: {{gold}}</h3>\n            </div>\n\n            <div id = \"box1\">\n              <h4>Village</h4>\n              <button (click) = \"findGold('village')\">Find Gold!</button>\n              <p>Gain 15-30 gold</p>\n            </div>\n            <div id = \"box2\">\n              <h4>Cave</h4>\n              <button (click) = \"findGold('cave')\">Find Gold!</button>\n              <p>Gain 8-20 gold</p>\n            </div>\n            <div id = \"box3\">\n              <h4>Shack</h4>\n              <button (click) = \"findGold('shack')\">Find Gold!</button>\n              <p>Gain 5-10 gold</p>\n            </div>\n            <div id = \"box4\">\n              <h4>Bank</h4>\n              <button (click) = \"findGold('bank')\">Find Gold!</button>\n              <p>Gain or lose 0-100 gold</p>\n            </div>\n            <div id = \"activity\">\n              <p><b>Activities:</b></p>\n              <p *ngFor = \"let message of messages\">{{message.message}}</p>\n            </div>\n            <div id = \"emptyspace\"></div>\n          </div>\n        </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'NinjaGold';
        this.gold = 0;
        this.messages = [];
        this.start = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.startGame = function (username) {
        console.log(username);
        this.username = username;
        var name = this._httpService.newGame({ username: username });
        name.subscribe(function (data) { return console.log("Got username!", data); });
        this.start = true;
    };
    AppComponent.prototype.findGold = function (building) {
        var _this = this;
        if (building == "village") {
            var newgold = Math.floor(Math.random() * 10) + 10;
            var message = "You have successfully raided a village and got " + newgold + " gold in the process.";
            this.gold = this.gold + newgold;
        }
        else if (building == "cave") {
            var newgold = Math.floor(Math.random() * 5) + 5;
            var message = "You have discovered an abandoned hideout in the cave and found " + newgold + " gold.";
            this.gold = this.gold + newgold;
        }
        else if (building == "shack") {
            var newgold = Math.floor(Math.random() * 3) + 2;
            var message = "You have found a shack in the middle of a forest and found " + newgold + " gold there.";
            this.gold = this.gold + newgold;
        }
        else {
            var newgold = Math.floor(Math.random() * 100) - 50;
            if (newgold > 0) {
                var message = "You have snuck into the bank and managed to steal " + newgold +
                    " gold in the process.";
                this.gold = this.gold + newgold;
            }
            else if (newgold == 0) {
                var message = "Your raid at the bank was unsuccessful, " +
                    "and you leave the bank with no gold lost or gained";
            }
            else {
                var message = "You've been caughting stealing gold at the bank! You manage to escape " +
                    "successfully, but you lose " + -(newgold) + " gold in the process.";
                this.gold = this.gold + newgold;
            }
        }
        var gold = this._httpService.findGold({ gold: this.gold, username: this.username, message: message });
        gold.subscribe(function (data) {
            _this.data = data;
            _this.messages = _this.data.game.activities.reverse();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.newGame = function (username) {
        return this._http.post("/start", username);
    };
    HttpService.prototype.findGold = function (info) {
        return this._http.put("/gold", info);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\mean_stack\angular\NinjaGold\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map