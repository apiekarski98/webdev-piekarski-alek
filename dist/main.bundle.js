webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgerImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_23__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/widgetId', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/page-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Pages</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-1 hidden-xs hidden-xs\">\n        <p class=\"navbar-text\">\n          <a [routerLink]=\"['/page-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10 col-md-7\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Page</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/page-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3 hidden-xs hidden-sm\">\n      <li class=\"list-group-item active\">\n        Name\n      </li>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Home Feed</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Profile</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Friends</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Account</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Settings</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-md-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">\n            Name\n          </label>\n          <input placeholder=\"Home Feed\"\n                 type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"title\">\n            Page Title\n          </label>\n          <input placeholder=\"Page Title\"\n                 type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/page-list']\">\n        Delete\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand\">\n            <b>Pages</b>\n          </a>\n        </p>\n      </div>\n\n      <!--plus sign-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/page-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin\">\n  <li class=\"list-group-item active\">\n    Name\n  </li>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/widget-list']\">Home Feed</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">01/01/01</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Mark</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/widget-list']\">Profile</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">02/02/02</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">James</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/widget-list']\">Friends</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">03/03/03</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Alek</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/widget-list']\">Account</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">04/04/04</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Alek</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/widget-list']\">Settings</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">05/05/05</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Alek</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/page-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Pages</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-1 hidden-xs hidden-xs\">\n        <p class=\"navbar-text\">\n          <a [routerLink]=\"['/page-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10 col-md-7\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>New Page</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/page-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3 hidden-xs hidden-sm\">\n      <li class=\"list-group-item active\">\n        Name\n      </li>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Home Feed</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Profile</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Friends</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Account</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/widget-list']\">Settings</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/page-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-md-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">\n            Name\n          </label>\n          <input placeholder=\"Home Feed\"\n                 type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"title\">\n            Page Title\n          </label>\n          <input placeholder=\"Page Title\"\n                 type=\"text\"\n                 id=\"title\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n  <input placeholder=\"username\"\n         type=\"text\"\n         id=\"username\"\n         class=\"form-control\"/>\n  <input placeholder=\"password\"\n         type=\"password\"\n         id=\"password\"\n         class=\"form-control\"/>\n  <a [routerLink]=\"['/profile']\"\n     class=\"btn btn-primary btn-block\">\n    Login\n  </a>\n  <a [routerLink]=\"['/register']\"\n     class=\"btn btn-success btn-block\">\n    Register\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <p>Profile</p>\n      </a>\n    </div>\n\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"container top-margin\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">\n        Username\n      </label>\n      <input placeholder=\"apiekarski\"\n             type=\"text\"\n             id=\"username\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">\n        Email\n      </label>\n      <input placeholder=\"piekarski.a@husky.neu.edu\"\n             type=\"email\"\n             id=\"email\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">\n        First Name\n      </label>\n      <input placeholder=\"Alek\"\n             type=\"text\"\n             id=\"first-name\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">\n        Last Name\n      </label>\n      <input placeholder=\"Piekarski\"\n             type=\"text\"\n             id=\"last-name\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/website-list']\">\n    Websites\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/login']\">\n    Logout\n  </a>\n\n</div>\n\n<div class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <input placeholder=\"username\"\n         type=\"text\"\n         id=\"username\"\n         class=\"form-control\"/>\n  <input placeholder=\"password\"\n         type=\"password\"\n         id=\"password\"\n         class=\"form-control\"/>\n  <input placeholder=\"verify password\"\n         type=\"password\"\n         id=\"password\"\n         class=\"form-control\"/>\n  <a [routerLink]=\"['/profile']\"\n     class=\"btn btn-primary btn-block\">\n    Register\n  </a>\n  <a [routerLink]=\"['/login']\"\n     class=\"btn btn-danger btn-block\">\n    Cancel\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Websites</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-1 hidden-xs hidden-xs\">\n        <p class=\"navbar-text\">\n          <a [routerLink]=\"['/website-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10 col-md-7\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Website</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Name\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Facebook</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Twitter</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Reddit</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-md-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">\n            Name\n          </label>\n          <input placeholder=\"Facebook\"\n                 type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea placeholder=\"Description\"\n                    type=\"text\"\n                    id=\"description\"\n                    rows=\"3\"\n                    class=\"form-control\">Facebook is a website that allows users to post statuses for their friends to see.</textarea>\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\"\n         [routerLink]=\"['/website-list']\">\n        Delete\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteEditComponent = (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteEditComponent);

//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--plus sign-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/profile']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Websites</b>\n          </a>\n        </p>\n      </div>\n\n      <!--plus sign-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/website-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      Name\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/page-list']\">Facebook</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">01/01/01</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Mark</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/page-list']\">Twitter</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">02/02/02</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">James</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a [routerLink]=\"['/page-list']\">Reddit</a>\n        </div>\n        <div class=\"col-xs-3 hidden-xs hidden-sm\">03/03/03</div>\n        <div class=\"col-xs-3 col-sm-3 col-md-3 hidden-xs\">Alek</div>\n        <div class=\"col-xs-3\">\n          <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteListComponent = (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteListComponent);

//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Websites</b>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-md-1 hidden-xs hidden-xs\">\n        <p class=\"navbar-text\">\n          <a [routerLink]=\"['/website-new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10 col-md-7\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>New Website</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3 hidden-xs hidden-sm\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">\n          Name\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Facebook</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Twitter</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a [routerLink]=\"['/page-list']\">Reddit</a>\n            </div>\n            <div class=\"col-xs-3\">\n              <a class=\"pull-right\" [routerLink]=\"['/website-edit']\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-xs-12 col-md-9\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">\n            Name\n          </label>\n          <input placeholder=\"Name\"\n                 type=\"text\"\n                 id=\"name\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea placeholder=\"Description\"\n                    type=\"text\"\n                    id=\"description\"\n                    rows=\"3\"\n                    class=\"form-control\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/website-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Choose Widget</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n  <ul><a [routerLink]=\"['/widget-header']\"> Header </a></ul>\n  <ul><a [routerLink]=\"['/widget-image']\"> Image </a></ul>\n  <ul><a [routerLink]=\"['/widget-youtube']\"> YouTube </a></ul>\n</div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Widget</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">\n        Name\n      </label>\n      <input placeholder=\"\"\n             type=\"text\"\n             id=\"name\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"text\">\n        Text\n      </label>\n      <input placeholder=\"Saudi Education Officials Fired for Publishing Textbook With Photo of King Faisal Next to Yoda\"\n             type=\"text\"\n             id=\"text\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"size\">\n        Size\n      </label>\n      <input placeholder=\"3\"\n             type=\"number\"\n             min=\"0\"\n             id=\"size\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/widget-list']\">\n    Delete\n  </a>\n</div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Widget</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">\n        Name\n      </label>\n      <input placeholder=\"\"\n             type=\"text\"\n             id=\"name\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"text\">\n        Text\n      </label>\n      <input placeholder=\"\"\n             type=\"text\"\n             id=\"text\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input placeholder=\"http://lorempixel.com/400/200/sports/1/\"\n             type=\"url\"\n             id=\"url\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input placeholder=\"100%\"\n             type=\"text\"\n             id=\"width\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"upload\">\n        Upload\n      </label>\n      <input placeholder=\"\"\n             type=\"file\"\n             id=\"upload\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <div class=\"btn btn-primary btn-block\">\n    Upload Image\n  </div>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/widget-list']\">\n    Delete\n  </a>\n</div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgerImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgerImageComponent = (function () {
    function WidgerImageComponent() {
    }
    WidgerImageComponent.prototype.ngOnInit = function () {
    };
    return WidgerImageComponent;
}());
WidgerImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widger-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgerImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Widget</b>\n          </a>\n        </p>\n      </div>\n\n      <!--Check mark-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/widget-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container top-margin\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">\n        Name\n      </label>\n      <input placeholder=\"\"\n             type=\"text\"\n             id=\"name\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"text\">\n        Text\n      </label>\n      <input placeholder=\"\"\n             type=\"text\"\n             id=\"text\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"url\">\n        URL\n      </label>\n      <input placeholder=\"https://www.youtube.com/watch?v=RY4rWrlY-qM\"\n             type=\"url\"\n             id=\"url\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"width\">\n        Width\n      </label>\n      <input placeholder=\"100%\"\n             type=\"text\"\n             id=\"width\"\n             class=\"form-control\"/>\n    </div>\n  </form>\n\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/widget-list']\">\n    Delete\n  </a>\n</div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <!--Back Arrow-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/page-list']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-xs-10\">\n        <p class=\"navbar-header\">\n          <a class=\"navbar-brand thick\">\n            <b>Widgets</b>\n          </a>\n        </p>\n      </div>\n\n      <!--plus sign-->\n      <div class=\"col-xs-1\">\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/widget-choose']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid top-margin\">\n  <div class=\"ap-widget\">\n    <div class=\"ap-toolbar\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h1>All Widgets</h1>\n  </div>\n\n  <div class=\"ap-widget\">\n    <div class=\"ap-toolbar\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img width=\"100%\" src=\"http://lorempixel.com/400/200/sports/1/\"/>\n  </div>\n\n  <div class=\"ap-widget\">\n    <div class=\"ap-toolbar\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <p>Saudi Arabia’s under-secretary for educational curricula and programs has <a\n      href=\"http://www.arabnews.com/node/1167756/saudi-arabia\" target=\"_blank\" rel=\"noopener\">found himself sacked</a>\n      after an official social studies textbook ran with a photo of King Faisal bin Abdulaziz Al Saud, the country’s\n      leader from 1964 to 1975, seated next to none other than Jedi master Yoda.</p>\n  </div>\n\n  <div class=\"ap-widget\">\n    <div class=\"ap-toolbar\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n      <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"560\"\n            height=\"315\"\n            src=\"https://www.youtube.com/embed/RY4rWrlY-qM\"\n            frameborder=\"0\"\n            allowfullscreen></iframe>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map