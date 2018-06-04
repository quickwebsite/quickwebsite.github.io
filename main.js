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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header>\n  <div class=\"container\">\n    <div id=\"branding\">\n      <h1><span class=\"highlight\">Just</span> Say Website</h1>\n    </div>\n    <nav>\n      <ul>\n        <li class=\"current\"><a href=\"index.html\">Home</a></li>\n        <li><a href=\"index.html\">About</a></li>\n        <li><a href=\"index.html\">Services</a></li>\n      </ul>\n    </nav>\n  </div>\n\n</header>\n\n\n\n<section id=\"showcase\">\n  <div class=\"container\">\n    <h1>Describe a Website - Have It Done</h1>\n    <p>You just fill in the form below with your website title, description, twitter.  Click the generate button and you have your website done! ;) We use <a href=\"https://jekyllrb.com/\" style=\"color:bisque\" target=\"_blank\">Jekyll</a> for web site generation, <a href=\"https://www.netlify.com/\" style=\"color:bisque\" target=\"_blank\">Netlify</a> for web site hosting, <a href=\"https://getbootstrap.com/\" style=\"color:bisque\" target=\"_blank\">Bootstrap</a> for theme management, <a href=\"https://github.com/\" style=\"color:bisque\" target=\"_blank\">Github</a> for web site revision history.  Click Generate WebSite button below and enjoy your free web site!</p>\n    <!--<video autoplay muted loop id=\"myVideo\">-->\n      <!--<source src=\"assets/rain.mp4\" type=\"video/mp4\" id=\"myVideo\">-->\n    <!--</video>-->\n  </div>\n</section>\n\n<!--<section id=\"newsletter\">-->\n  <!--<div class=\"container\">-->\n    <!--<h1>Subscribe To Our Newsletter</h1>-->\n    <!--<form>-->\n      <!--<input type=\"email\" placeholder=\"Enter Email...\">-->\n      <!--<button type=\"submit\" class=\"button_1\">Subscribe</button>-->\n    <!--</form>-->\n  <!--</div>-->\n<!--</section>-->\n\n<section id=\"boxes\">\n  <div class=\"container\">\n      <app-inputform></app-inputform>\n  </div>\n</section>\n\n<section id=\"sociallogin\">\n  <div class=\"container\">\n    <div class=\"box\">\n      <app-sociallogin></app-sociallogin>\n    </div>\n  </div>\n</section>\n\n\n<!--<section id=\"boxes\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"box\">-->\n      <!--<img src=\"assets/img/logo_html.png\">-->\n      <!--<h3>HTML5 Markup</h3>-->\n      <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>-->\n    <!--</div>-->\n    <!--<div class=\"box\">-->\n      <!--<img src=\"assets/img/logo_css.png\">-->\n      <!--<h3>CSS3 Styling</h3>-->\n      <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>-->\n    <!--</div>-->\n    <!--<div class=\"box\">-->\n      <!--<img src=\"assets/img/logo_brush.png\">-->\n      <!--<h3>Graphic Design</h3>-->\n      <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n<footer>\n  <p>JustSayWebsite Web Deisgn, Tomer Ben David, Copyright &copy; 2018</p>\n</footer>\n\n\n<!--\n<div style=\"text-align:center\">\n\n\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n<h2>Just Say What Your Website Is About Below: </h2>\n\n\n\n<ul>\n\n\n\n\n  <li>\n    <app-inputform></app-inputform>\n  </li>\n\n  <li>\n\n  </li>\n</ul>\n\n-->\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_inputform_inputform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputform/inputform.component */ "./src/app/components/inputform/inputform.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sociallogin/sociallogin.component */ "./src/app/components/sociallogin/sociallogin.component.ts");
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config-service.service */ "./src/app/config-service.service.ts");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/logger-plugin */ "./node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _store_State__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/State */ "./src/app/store/State.ts");
/* harmony import */ var _store_errohandling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/errohandling */ "./src/app/store/errohandling.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"]([
    {
        id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"]('150697409404-10tptpnagkv9mcogc79nk3c5m8bcenn6.apps.googleusercontent.com')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_inputform_inputform_component__WEBPACK_IMPORTED_MODULE_7__["InputformComponent"],
                _components_sociallogin_sociallogin_component__WEBPACK_IMPORTED_MODULE_10__["SocialLoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([_store_State__WEBPACK_IMPORTED_MODULE_15__["AppState"]]),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_14__["NgxsStoragePluginModule"].forRoot(),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__["NgxsReduxDevtoolsPluginModule"].forRoot({ disabled: false }),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsLoggerPluginModule"].forRoot()
            ],
            providers: [{
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
                    useFactory: provideConfig,
                }, _config_service_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
                    useClass: _store_errohandling__WEBPACK_IMPORTED_MODULE_16__["ErrorsHandler"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/inputform/inputform.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/inputform/inputform.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.mat-unstyled-image img{\n  max-width: 100%;\n  width: auto;\n  height: auto !important; /* needs to be important because md-card also sets it that way */\n}\n\n"

/***/ }),

/***/ "./src/app/components/inputform/inputform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/inputform/inputform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form class=\"example-form\" (ngSubmit)=\"onSubmit()\">-->\n    <form class=\"example-full-width\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"10%\" fxLayoutAlign=\"center\">\n\n        <div fxFlex=\"50%\">\n          <h2>Describe Your WebSite</h2>\n\n          <mat-horizontal-stepper>\n\n            <mat-step>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Web Site Title\" (change)=\"onFieldsChange(title.value, subtitle.value, description.value, topButtonTitle.value, subDescription.value)\" #title value=\"{{ (app$ | async).everyBootstrapThemeConfig.match('title: &quot;(.*)&quot;')[1] }}\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Subtitle\" (change)=\"onFieldsChange(title.value, subtitle.value, description.value, topButtonTitle.value, subDescription.value)\" value=\"{{ (app$ | async).everyBootstrapThemeConfig.match('top_left_title: &quot;(.*)&quot;')[1] }}\" #subtitle>\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Web Site Description\" (change)=\"onFieldsChange(title.value, subtitle.value, description.value, topButtonTitle.value, subDescription.value)\" #description value=\"{{ (app$ | async).everyBootstrapThemeConfig.match('moredetails_section_description: &quot;(.*)&quot;')[1] }}\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Main Button Title\" (change)=\"onFieldsChange(title.value, subtitle.value, description.value, topButtonTitle.value, subDescription.value)\" #topButtonTitle value=\"{{ (app$ | async).everyBootstrapThemeConfig.match('top_button_page_scroll_title: &quot;(.*)&quot;')[1] }}\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Mid Page Description\" (change)=\"onFieldsChange(title.value, subtitle.value, description.value, topButtonTitle.value, subDescription.value)\" #subDescription value=\"{{ (app$ | async).everyBootstrapThemeConfig.match('multicolumn_section_first_column_description: &quot;(.*)&quot;')[1] }}\">\n              </mat-form-field>\n\n              <div>\n                <button mat-button matStepperNext type=\"button\">Next</button>\n              </div>\n            </mat-step>\n\n            <mat-step>\n              <mat-form-field class=\"example-full-width\">\n                <textarea matInput rows=\"20\" placeholder=\"Advanced Change Anything Here\" value=\"{{ (app$ | async).everyBootstrapThemeConfig }}\" #themeConfig name=\"themeConfig\"></textarea>\n              </mat-form-field>\n\n              <div>\n                <button mat-button matStepperPrevious type=\"button\">Back</button>\n                <button mat-button matStepperNext type=\"button\">Next</button>\n              </div>\n\n            </mat-step>\n\n\n          </mat-horizontal-stepper>\n\n          <div>\n            <p>\n              <button mat-raised-button type=\"submit\"\n                      class=\"btn btn-success\"\n                      (click)=\"genereateWebSite(themeConfig.value);openSnackBar('Cool, we are preparing your website', 'It takes about one minute!')\">Generate Your Website!</button>\n            </p>\n          </div>\n          <div *ngIf=\"isInProgress\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n          </div>\n          <div *ngIf=\"isFinishedUpdatingSite\">\n            <p>\n              <a href=\"{{ (app$ | async).webSiteUrl }}\" target=\"_blank\" >You Said It - Your Web Site Is Here!</a>\n            </p>\n          </div>\n\n        </div> <!-- flex column 50% -->\n\n        <div fxFlex=\"50%\">\n          <h2>Choose Theme</h2>\n          <mat-card>\n            <img mat-card-image src=\"assets/img/everybootstrap-theme-preview.png\">\n            <mat-card-actions>\n              <div *ngIf=\"((app$ | async).everyBootstrapThemeConfig.match('justsaywebsite_theme: &quot;(.*)&quot;') == null || (app$ | async).everyBootstrapThemeConfig.match('justsaywebsite_theme: &quot;(.*)&quot;')[1] === 'jekyll-theme-03-every-boostrap'); else chooseEveryBootstrap\">\n                  <button mat-button>CURRENT THEME!</button>\n              </div>\n              <ng-template #chooseEveryBootstrap>\n                <button (click)=\"onThemeChange('jekyll-theme-03-every-boostrap')\" mat-button>CHOOSE ME</button>\n              </ng-template>\n            </mat-card-actions>\n          </mat-card>\n          <mat-card>\n            <img mat-card-image src=\"assets/img/grayscale-theme-preview.png\">\n            <mat-card-actions>\n              <div *ngIf=\"((app$ | async).everyBootstrapThemeConfig.match('justsaywebsite_theme: &quot;(.*)&quot;') !== null && (app$ | async).everyBootstrapThemeConfig.match('justsaywebsite_theme: &quot;(.*)&quot;')[1] === 'justsaywebsite-theme-startbootstrap-grayscale'); else chooseGrayScale\">\n                <button mat-button>CURRENT THEME!</button>\n              </div>\n              <ng-template #chooseGrayScale>\n                <button (click)=\"onThemeChange('justsaywebsite-theme-startbootstrap-grayscale')\" mat-button>CHOOSE ME</button>\n              </ng-template>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n\n\n      </div> <!-- flex row -->\n\n\n\n\n    </form>\n"

/***/ }),

/***/ "./src/app/components/inputform/inputform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/inputform/inputform.component.ts ***!
  \*************************************************************/
/*! exports provided: InputformComponent, WebSiteProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputformComponent", function() { return InputformComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSiteProperties", function() { return WebSiteProperties; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config-service.service */ "./src/app/config-service.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InputformComponent = /** @class */ (function () {
    function InputformComponent(http, snackBar, formBuilder, configService, store) {
        var _this = this;
        this.http = http;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.configService = configService;
        this.store = store;
        this.isInProgress = false;
        this.isFinishedUpdatingSite = false;
        this.emailFromStore = null;
        this.model = new WebSiteProperties('Default Web Site Title', 'The only site description The only site description The only site ' +
            'description The only site description The only site description The only site description The only site description The only ' +
            'site description The only site description The only site description ', 'Top Button Title', 'Want to make this subtitle yourself?', 'Forget that! Who would ever want to put in all of that effort for a website? Just open up your ' +
            'web browser and type bootstrap template ' +
            'into your favorite search engine, like Yahoo! or Bing, and you\'re on your way! There are hundreds of templates to choose from, but ' +
            'go ahead and pick this same exact template from the first result on google, edit a few lines, ' +
            'and you\'re on your way! No one will notice! :)', 'Section 3 Default Title Internal');
        this.store.select(function (state) {
            _this.emailFromStore = state.email;
        });
    }
    InputformComponent.prototype.ngOnInit = function () {
        this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_6__["InitWithDefaultsAction"]()]);
    };
    InputformComponent.prototype.onSubmit = function () {
    };
    InputformComponent.prototype.checkStatus = function (sitename) {
        var _this = this;
        this.http.get(this.configService.config.serverURL + "/justsaywebsite/status/?sitename=" + sitename).subscribe(function (data) {
            console.log("status: " + JSON.stringify(data));
            var that = _this;
            if (data.status !== 'done') {
                console.log("status is not done yet its: " + data.status);
                setTimeout(function () { that.checkStatus(sitename); }, 5000);
            }
            else {
                _this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_6__["WebSiteGeneratedAction"]("https://" + sitename + ".netlify.com")]);
                _this.isInProgress = false;
                _this.isFinishedUpdatingSite = true;
                _this.openSnackBar('Your website is ready', 'click above link to open it!');
            }
        }, function (error) {
            console.log("an error has occured: " + error.message);
            _this.isInProgress = false;
        });
    };
    InputformComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 10000,
        });
    };
    InputformComponent.prototype.genereateWebSite = function (themeConfig) {
        var _this = this;
        this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_6__["GenerateWebSiteAction"](themeConfig)]);
        console.log('form submitted...');
        this.isInProgress = true;
        console.log('model: ' + JSON.stringify(this.model));
        this.store.selectSnapshot(function (state) {
            console.log("onSubmit state: " + themeConfig);
            _this.http.post(_this.configService.config.serverURL, { email: state.app.email, pageData: JSON.stringify(themeConfig) }).subscribe(function (data) {
                _this.checkStatus(data.sitename);
                // this.store.dispatch([new WebSiteGeneratedAction(data.sitename)]);
                // this.isInProgress = false;
                // this.isFinishedUpdatingSite = true;
                // this.openSnackBar('Your website is ready', 'click above link to open it!');
            }, function (error) {
                console.log("an error has occured: " + error.message);
                _this.isInProgress = false;
            });
        });
    };
    InputformComponent.prototype.getTitle = function () {
        return this.app$.map(function (state) {
            return state.everyBootstrapThemeConfig.match('title: &quot;(.*)&quot;')[1];
        });
    };
    InputformComponent.prototype.onFieldsChange = function (title, subtitle, description, topButtonTitle, subDescription) {
        this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_6__["WebSiteFieldsUpdatedAction"](title, subtitle, description, topButtonTitle, subDescription)]);
    };
    InputformComponent.prototype.onThemeChange = function (theme) { this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_6__["ThemeChosenAction"](theme)]); };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(),
        __metadata("design:type", Object)
    ], InputformComponent.prototype, "app$", void 0);
    InputformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputform',
            template: __webpack_require__(/*! ./inputform.component.html */ "./src/app/components/inputform/inputform.component.html"),
            styles: [__webpack_require__(/*! ./inputform.component.css */ "./src/app/components/inputform/inputform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material___WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _config_service_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], InputformComponent);
    return InputformComponent;
}());

var WebSiteProperties = /** @class */ (function () {
    function WebSiteProperties(title, description, topButtonScrollTitle, subtitle, subdescription, section3Title) {
        this.title = title;
        this.description = description;
        this.topButtonScrollTitle = topButtonScrollTitle;
        this.subtitle = subtitle;
        this.subdescription = subdescription;
        this.section3Title = section3Title;
    }
    return WebSiteProperties;
}());



/***/ }),

/***/ "./src/app/components/sociallogin/sociallogin.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/sociallogin/sociallogin.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Social Buttons Style */\n.btn-si {\n  background-position: 1em;\n  background-repeat: no-repeat;\n  background-size: 2em;\n  border-radius: 0.5em;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 1em;\n  height: 4em;\n  line-height: 1em;\n  padding: 0 2em 0 4em;\n  text-decoration: none;\n  transition: all 0.5s;\n\n}\n.btn-google {\n  background-color: #dd4b39;\n  background-image: url(\"/./assets/img/google.svg\");\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n}\n.btn-google:hover {\n  background-color: #e47365; }\n.btn-google:active {\n  background-color: #c23321; }\n.btn-si-a {\n  padding: 25px 15px 25px 65px !important;\n  font-family: arial;\n}\n.smaller .btn-si-a {\n  padding-left: 40px !important;\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/components/sociallogin/sociallogin.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/sociallogin/sociallogin.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin:20px\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"2%\" fxLayoutAlign=\"center\"> <!-- style margin add padding to social top -->\n\n  <div fxFlex=\"100%\">\n\n    <div class=\"jumbotron bg-transparent text-center\">\n      <div *ngIf=\"!(app$ | async).email\" class=\"card text-center\">\n        <div class=\"card-block\">\n          <button class=\"btn-si btn-google\" (click)=\"socialSignIn('google')\">Login To Generate Your Unique Site</button>\n        </div>\n      </div>\n      <div *ngIf=\"(app$ | async).email\" class=\"card text-center\">\n        <div class=\"card-block\"></div>\n        <img class=\"card-img-top img-responsive photo\" src=\"{{ (app$ | async).photoURL }}\">\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">{{ (app$ | async).username }}</h4>\n          <p class=\"card-text\">{{ (app$ | async).email }}</p>\n        </div>\n        <div class=\"card-block\">\n          <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/sociallogin/sociallogin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sociallogin/sociallogin.component.ts ***!
  \*****************************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config-service.service */ "./src/app/config-service.service.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocialLoginComponent = /** @class */ (function () {
    function SocialLoginComponent(socialAuthService, configService, store) {
        this.socialAuthService = socialAuthService;
        this.configService = configService;
        this.store = store;
    }
    SocialLoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.user = userData;
            console.log(socialPlatform + " sign in data : ", userData);
            _this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateEmailAction"](userData.email, userData.name, userData.image)]);
        });
    };
    SocialLoginComponent.prototype.signOut = function () {
        this.user = null;
        this.socialAuthService.signOut();
        this.store.dispatch([new _store_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateEmailAction"](null, null, null)]);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(),
        __metadata("design:type", Object)
    ], SocialLoginComponent.prototype, "app$", void 0);
    SocialLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sociallogin',
            template: __webpack_require__(/*! ./sociallogin.component.html */ "./src/app/components/sociallogin/sociallogin.component.html"),
            styles: [__webpack_require__(/*! ./sociallogin.component.css */ "./src/app/components/sociallogin/sociallogin.component.css")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _config_service_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SocialLoginComponent);
    return SocialLoginComponent;
}());



/***/ }),

/***/ "./src/app/config-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/config-service.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = new _config_config__WEBPACK_IMPORTED_MODULE_1__["CurrentConfig"]();
        console.log("backend is: " + this.config.serverURL);
    }
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/store/State.ts":
/*!********************************!*\
  !*** ./src/app/store/State.ts ***!
  \********************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var everyBootstrapThemeConfigDefault = "# Titles\n\ntitle: \"Your Cool WebSite Title\"\ntop_left_title: \"Your Cool Website\"\ntop_button_page_scroll_title: \"Check Us Out\"\n\n# Navigation Bar\n\nnavigation_four_icons_text: \"Four Icons\"\nnavigation_showcase_text: \"Showcase\"\nnavigation_contactus_text: \"Call Me\"\n\n# More Details Section\n\nmoredetails_section_title: \"This Is An Amazing Product\"\nmoredetails_section_description: \"Your whole website is actually one text file configuration, isn't that just wonderful, you can backup your whole web site with a simple text file, this is just genius! You can switch templates and just upload this single text file to change template, awesome!\"\nmoredetails_section_button_title: \"Google That Shit\"\n\n# Showcase Section\n\nmulticolumn_section_title: \"So Fucking Creative\"\nmulticolumn_section_first_column_title: \"This Fucking Template\"\nmulticolumn_section_first_column_description: \"Guaranteed to use the same fucking template that every other bootstrap website uses, downloaded straight from The Web\"\nmulticolumn_section_second_column_title: \"This Set of Four Icons\"\nmulticolumn_section_second_column_description: \"Look at this cool set of four icons describing different things about us! We use four, because it's the default.\"\nmulticolumn_section_third_column_title: \"Lots of effort\"\nmulticolumn_section_third_column_description: \"We even changed some of the icons! We take the extra effort to make our designs truly original.\"\nmulticolumn_section_forth_column_title: \"Made with Love\"\nmulticolumn_section_forth_column_description: \"Because nothing says hard work and talent like editing a few lines of text.\"\n\n# Social\n\nemail: holly@shit.com\ndescription: \"Your whole website is actually one text file, isn't that just wonderful, you can backup your whole web site with a simple text file, this is just genius! You can switch templates and just upload this single text file to change template, awesome!\"\nbaseurl: \"\" # the subpath of your site, e.g. /blog\nurl: \"\" # the base hostname & protocol for your site, e.g. http://example.com\ntwitter_username: jekyllrb\ngithub_username:  jekyll\n\n# Build settings\nmarkdown: kramdown\ntheme: minima\nplugins:\n  - jekyll-feed\n\njustsaywebsite_theme: \"jekyll-theme-03-every-boostrap\"\ntomersource: https://github.com/petehouston/the-only-bootstrap-page\n";
var AppState = /** @class */ (function () {
    function AppState() {
    }
    AppState.getUser = function (state) {
        return state.email;
    };
    AppState.prototype.setEmail = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var email = _b.email, username = _b.username, photoURL = _b.photoURL;
        patchState({ email: email, username: username, photoURL: photoURL });
    };
    AppState.prototype.setWebSiteUrl = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var webSiteUrl = _b.webSiteUrl;
        patchState({ webSiteUrl: webSiteUrl });
    };
    AppState.prototype.setThemeConfig = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var everyBootstrapThemeConfig = _b.everyBootstrapThemeConfig;
        patchState({ everyBootstrapThemeConfig: everyBootstrapThemeConfig });
    };
    AppState.prototype.resetWebSitefields = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        patchState({ everyBootstrapThemeConfig: everyBootstrapThemeConfigDefault });
    };
    AppState.prototype.updateStateByFields = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var title = _b.title, subtitle = _b.subtitle, description = _b.description, buttonTitle = _b.buttonTitle, midPageDescription = _b.midPageDescription;
        var currentThemeConfig = getState().everyBootstrapThemeConfig;
        var updatedThemeConfig = currentThemeConfig.replace(/^title: "(.*?)$/gm, "title: \"" + title + "\"")
            .replace(/^top_left_title: "(.*?)$/gm, "top_left_title: \"" + subtitle + "\"")
            .replace(/^moredetails_section_description: "(.*?)$/gm, "moredetails_section_description: \"" + description + "\"")
            .replace(/^top_button_page_scroll_title: "(.*?)$/gm, "top_button_page_scroll_title: \"" + buttonTitle + "\"")
            .replace(/^multicolumn_section_first_column_description: "(.*?)$/gm, "multicolumn_section_first_column_description: \"" + midPageDescription + "\"");
        patchState({ everyBootstrapThemeConfig: updatedThemeConfig });
    };
    AppState.prototype.themeChosen = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var theme = _b.theme;
        var currentThemeConfig = getState().everyBootstrapThemeConfig;
        var updatedThemeConfig = currentThemeConfig.replace(/^justsaywebsite_theme: "(.*?)$/gm, "justsaywebsite_theme: \"" + theme + "\"");
        patchState({ everyBootstrapThemeConfig: updatedThemeConfig });
    };
    AppState.prototype.initState = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        if (getState().everyBootstrapThemeConfig == null) {
            patchState({ everyBootstrapThemeConfig: everyBootstrapThemeConfigDefault });
        }
        if (getState().everyBootstrapThemeConfig.indexOf('justsaywebsite_theme') == -1) {
            patchState({ everyBootstrapThemeConfig: everyBootstrapThemeConfigDefault + '\njustsaywebsite_theme: jekyll-theme-03-every-boostrap' });
        }
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateEmailAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateEmailAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "setEmail", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["WebSiteGeneratedAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["WebSiteGeneratedAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "setWebSiteUrl", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GenerateWebSiteAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["GenerateWebSiteAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "setThemeConfig", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ResetWebSiteFieldsAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["GenerateWebSiteAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "resetWebSitefields", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["WebSiteFieldsUpdatedAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["WebSiteFieldsUpdatedAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "updateStateByFields", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ThemeChosenAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["ThemeChosenAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "themeChosen", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_actions__WEBPACK_IMPORTED_MODULE_1__["InitWithDefaultsAction"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _actions__WEBPACK_IMPORTED_MODULE_1__["InitWithDefaultsAction"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "initState", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppState, "getUser", null);
    AppState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'app',
            defaults: {
                username: null,
                email: null,
                photoURL: null,
                webSiteUrl: null,
                everyBootstrapThemeConfig: everyBootstrapThemeConfigDefault
            }
        })
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: UpdateEmailAction, WebSiteGeneratedAction, GenerateWebSiteAction, WebSiteFieldsUpdatedAction, ThemeChosenAction, InitWithDefaultsAction, ResetWebSiteFieldsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailAction", function() { return UpdateEmailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSiteGeneratedAction", function() { return WebSiteGeneratedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateWebSiteAction", function() { return GenerateWebSiteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSiteFieldsUpdatedAction", function() { return WebSiteFieldsUpdatedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChosenAction", function() { return ThemeChosenAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitWithDefaultsAction", function() { return InitWithDefaultsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetWebSiteFieldsAction", function() { return ResetWebSiteFieldsAction; });
var UpdateEmailAction = /** @class */ (function () {
    function UpdateEmailAction(email, username, photoURL) {
        this.email = email;
        this.username = username;
        this.photoURL = photoURL;
    }
    UpdateEmailAction.type = '[QUICKWEBSITE] UpdateUserAction';
    return UpdateEmailAction;
}());

var WebSiteGeneratedAction = /** @class */ (function () {
    function WebSiteGeneratedAction(webSiteUrl) {
        this.webSiteUrl = webSiteUrl;
    }
    WebSiteGeneratedAction.type = '[QUICKWEBSITE] WebSiteGeneratedAction';
    return WebSiteGeneratedAction;
}());

var GenerateWebSiteAction = /** @class */ (function () {
    function GenerateWebSiteAction(everyBootstrapThemeConfig) {
        this.everyBootstrapThemeConfig = everyBootstrapThemeConfig;
    }
    GenerateWebSiteAction.type = '[QUICKWEBSITE] GenerateWebSiteAction';
    return GenerateWebSiteAction;
}());

var WebSiteFieldsUpdatedAction = /** @class */ (function () {
    function WebSiteFieldsUpdatedAction(title, subtitle, description, buttonTitle, midPageDescription) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.buttonTitle = buttonTitle;
        this.midPageDescription = midPageDescription;
    }
    WebSiteFieldsUpdatedAction.type = '[QUICKWEBSITE] WebSiteFieldsUpdatedAction';
    return WebSiteFieldsUpdatedAction;
}());

var ThemeChosenAction = /** @class */ (function () {
    function ThemeChosenAction(theme) {
        this.theme = theme;
    }
    ThemeChosenAction.type = '[QUICKWEBSITE] ThemeChosenAction';
    return ThemeChosenAction;
}());

var InitWithDefaultsAction = /** @class */ (function () {
    function InitWithDefaultsAction() {
    }
    InitWithDefaultsAction.type = '[QUICKWEBSITE] InitWithDefaultsAction';
    return InitWithDefaultsAction;
}());

var ResetWebSiteFieldsAction = /** @class */ (function () {
    function ResetWebSiteFieldsAction() {
    }
    ResetWebSiteFieldsAction.type = '[QUICKWEBSITE] ResetWebSiteFieldsAction';
    return ResetWebSiteFieldsAction;
}());



/***/ }),

/***/ "./src/app/store/errohandling.ts":
/*!***************************************!*\
  !*** ./src/app/store/errohandling.ts ***!
  \***************************************/
/*! exports provided: ErrorsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsHandler", function() { return ErrorsHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorsHandler = /** @class */ (function () {
    function ErrorsHandler(injector) {
        this.injector = injector;
    }
    ErrorsHandler.prototype.handleError = function (error) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        console.error('It happens: ', error);
        this.injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]).dispatch([new _actions__WEBPACK_IMPORTED_MODULE_2__["ResetWebSiteFieldsAction"]()]);
    };
    ErrorsHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ErrorsHandler);
    return ErrorsHandler;
}());



/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/*! exports provided: DevConfig, ProdConfig, CurrentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevConfig", function() { return DevConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdConfig", function() { return ProdConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConfig", function() { return CurrentConfig; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DevConfig = /** @class */ (function () {
    function DevConfig() {
        this.serverURL = 'http://localhost:8181';
    }
    return DevConfig;
}());

var ProdConfig = /** @class */ (function () {
    function ProdConfig() {
        this.serverURL = 'https://quickwebsite-backend.herokuapp.com';
    }
    return ProdConfig;
}());

var CurrentConfig = /** @class */ (function (_super) {
    __extends(CurrentConfig, _super);
    function CurrentConfig() {
        return _super.call(this) || this;
    }
    return CurrentConfig;
}(ProdConfig));



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/tomer.bendavid/dev/projects/quickwebsite-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map