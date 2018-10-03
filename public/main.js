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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 10px 20px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-5\">\n    <div class=\"branding\">\n      <a routerLink=\"home\" routerLinkActive=\"active\" class=\"nav-link\">\n        <clr-icon shape=\"users\" style=\"color: white;\"></clr-icon>\n        <span class=\"title\">Admin</span>\n      </a>\n    </div>\n    <div class=\"header-nav\">\n        <a routerLink=\"home\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Home</a>\n        <a routerLink=\"resorts\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Resorts</a>\n        <a routerLink=\"overview\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Overview</a>\n        <a routerLink=\"addUser\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Add User</a>\n    </div>\n    <div class=\"header-actions\">\n        <clr-dropdown>\n            <button class=\"nav-icon\" clrDropdownTrigger>\n                <clr-icon shape=\"cog\"></clr-icon>\n                <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n            <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                <a routerLink=\"about\" clrDropdownItem>About</a>\n                <a routerLink=\"home\" clrDropdownItem>Preferences</a>\n                <a routerLink=\"/login\" clrDropdownItem>Log out</a>\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n  </header>\n\n  <main class=\"content\">\n    <router-outlet></router-outlet>\n  </main>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/resort.service */ "./src/app/services/resort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(resortService) {
        this.resortService = resortService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resort_service__WEBPACK_IMPORTED_MODULE_1__["ResortService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/resorts/resorts.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/resorts/resorts.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/resorts/resorts.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/resorts/resorts.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" (click)=\"onCreateResort()\"><clr-icon shape=\"plus\"></clr-icon> Add Resort</button>\n\n<clr-datagrid>\n\n  <clr-dg-column>Resort</clr-dg-column>\n  <clr-dg-column>Leader</clr-dg-column>\n  <clr-dg-column>Change Leader</clr-dg-column>\n  <clr-dg-column>Delete Resort</clr-dg-column>\n\n  <clr-dg-row *clrDgItems=\"let resort of resorts\">\n\n    <clr-dg-cell>{{resort.name}}</clr-dg-cell>\n    <clr-dg-cell>{{getLeaderName(resort)}}</clr-dg-cell>\n\n    <clr-dg-cell>\n      <button class=\"btn btn-info-outline btn-sm\" (click)=\"onChangeLeader(resort)\">Change Leader</button>\n    </clr-dg-cell>\n\n    <clr-dg-cell>\n      <button class=\"btn btn-warning-outline btn-sm\" (click)=\"onDeleteResort(resort)\">Delete Resort</button>\n    </clr-dg-cell>\n\n\n  </clr-dg-row>\n\n\n  <clr-dg-footer>\n    <clr-dg-pagination #pagination [clrDgPageSize]=\"5\">\n        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n        of {{pagination.totalItems}} resorts\n    </clr-dg-pagination>\n  </clr-dg-footer>\n</clr-datagrid>\n\n<!-- CHANGE LEADER MODAL -->\n<clr-modal [(clrModalOpen)]=\"showLeaderModal\" [clrModalSize]=\"'lg'\" [clrModalStaticBackdrop]=\"true\">\n  <h3 class=\"modal-title\">Change Leader</h3>\n  <div class=\"modal-body\">\n    <p>Select the user you want to be the next leader of resort <span *ngIf=\"assignableResort\">'{{assignableResort.name}}'</span></p>\n      <select clrSelect name=\"options\" [(ngModel)]=\"selectedLeaderId\">\n        <option *ngFor=\"let user of users\" [value]=\"user.id\">{{user.firstName}} {{user.lastName}}</option>\n      </select>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"showLeaderModal = false\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"changeLeader(assignableResort, selectedLeaderId)\">Save</button>\n  </div>\n</clr-modal>\n\n<!-- DELETE RESORT MODAL -->\n<clr-modal [(clrModalOpen)]=\"showDeleteModal\" [clrModalSize]=\"'lg'\" [clrModalStaticBackdrop]=\"true\">\n  <h3 class=\"modal-title\">Delete Resort</h3>\n  <div class=\"modal-body\">\n      <p>Are you sure that you want to delete the resort <span *ngIf=\"deletableResort\">'{{deletableResort.name}}'</span>?</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"showDeleteModal = false\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteResort(deletableResort)\">Delete</button>\n  </div>\n</clr-modal>\n\n<!-- CREATE RESORT MODAL -->\n<clr-modal [(clrModalOpen)]=\"showNewResortModal\" [clrModalSize]=\"'lg'\" [clrModalStaticBackdrop]=\"true\">\n  <h3 class=\"modal-title\">Create New Resort</h3>\n  <div class=\"modal-body\">\n    <label for=\"\">Resort Name:</label>\n    <input type=\"text\" [(ngModel)]=\"newResortName\">\n      <p>Select the user you want to be the leader of <span *ngIf=\"!newResortName\">the resort</span> <span *ngIf=\"newResortName\">resort '{{newResortName}}'</span></p>\n      <select clrSelect name=\"options\" [(ngModel)]=\"newResortLeaderId\">\n        <option *ngFor=\"let user of users\" [value]=\"user.id\">{{user.firstName}} {{user.lastName}}</option>\n      </select>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"showNewResortModal = false\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!newResortName || !newResortLeaderId\" (click)=\"createResort(newResortName, newResortLeaderId)\">Save</button>\n  </div>\n</clr-modal>\n"

/***/ }),

/***/ "./src/app/admin/resorts/resorts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/resorts/resorts.component.ts ***!
  \****************************************************/
/*! exports provided: ResortsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortsComponent", function() { return ResortsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/resort.service */ "./src/app/services/resort.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResortsComponent = /** @class */ (function () {
    function ResortsComponent(resortService, userService) {
        var _this = this;
        this.resortService = resortService;
        this.userService = userService;
        this.resorts = [];
        this.users = [];
        this.showDeleteModal = false;
        this.showLeaderModal = false;
        this.selectedLeaderId = '';
        this.showNewResortModal = false;
        this.newResortName = '';
        this.newResortLeaderId = '';
        resortService.fetchResorts().subscribe(function (resorts) {
            _this.resorts = resorts;
        });
        userService.fetchUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    ResortsComponent.prototype.ngOnInit = function () { };
    ResortsComponent.prototype.onChangeLeader = function (resort) {
        this.assignableResort = resort;
        this.selectedLeaderId = resort.leaderId;
        this.showLeaderModal = true;
    };
    ResortsComponent.prototype.changeLeader = function (resort, userId) {
        resort.leaderId = userId;
        this.resortService.updateResort(resort);
        this.showLeaderModal = false;
    };
    ResortsComponent.prototype.onCreateResort = function () {
        this.showNewResortModal = true;
    };
    ResortsComponent.prototype.createResort = function (name, leaderId) {
        this.resortService.addResort(name, leaderId);
        this.newResortName = '';
        this.newResortLeaderId = this.users[0].id;
        this.showNewResortModal = false;
    };
    ResortsComponent.prototype.onDeleteResort = function (resort) {
        this.deletableResort = resort;
        this.showDeleteModal = true;
    };
    ResortsComponent.prototype.deleteResort = function (resort) {
        this.resortService.deleteResort(resort);
        this.showDeleteModal = false;
    };
    ResortsComponent.prototype.getLeaderName = function (resort) {
        var leader = this.userService.getUserById(resort.leaderId);
        return leader.firstName + ' ' + leader.lastName;
    };
    ResortsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-resorts',
            template: __webpack_require__(/*! ./resorts.component.html */ "./src/app/admin/resorts/resorts.component.html"),
            styles: [__webpack_require__(/*! ./resorts.component.css */ "./src/app/admin/resorts/resorts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resort_service__WEBPACK_IMPORTED_MODULE_1__["ResortService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ResortsComponent);
    return ResortsComponent;
}());



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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'doorwatch';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-root',
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _doorwatch_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doorwatch/overview/overview.component */ "./src/app/doorwatch/overview/overview.component.ts");
/* harmony import */ var _doorwatch_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doorwatch/add-user/add-user.component */ "./src/app/doorwatch/add-user/add-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _doorwatch_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doorwatch/home/home.component */ "./src/app/doorwatch/home/home.component.ts");
/* harmony import */ var _doorwatch_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./doorwatch/about/about.component */ "./src/app/doorwatch/about/about.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _doorwatch_doorwatch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doorwatch/doorwatch.component */ "./src/app/doorwatch/doorwatch.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_resorts_resorts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/resorts/resorts.component */ "./src/app/admin/resorts/resorts.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: 'dw',
        component: _doorwatch_doorwatch_component__WEBPACK_IMPORTED_MODULE_12__["DoorwatchComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        children: [
            {
                path: 'home',
                component: _doorwatch_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            },
            {
                path: 'overview',
                component: _doorwatch_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"]
            },
            {
                path: 'addUser',
                component: _doorwatch_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"]
            },
            {
                path: 'about',
                component: _doorwatch_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]],
        children: [
            {
                path: 'home',
                component: _doorwatch_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            },
            {
                path: 'resorts',
                component: _admin_resorts_resorts_component__WEBPACK_IMPORTED_MODULE_14__["ResortsComponent"]
            },
            {
                path: 'overview',
                component: _doorwatch_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"]
            },
            {
                path: 'addUser',
                component: _doorwatch_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"]
            },
            {
                path: 'about',
                component: _doorwatch_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _doorwatch_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"],
                _doorwatch_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"],
                _doorwatch_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _doorwatch_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _doorwatch_doorwatch_component__WEBPACK_IMPORTED_MODULE_12__["DoorwatchComponent"],
                _admin_resorts_resorts_component__WEBPACK_IMPORTED_MODULE_14__["ResortsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrFormsModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/doorwatch/about/about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/doorwatch/about/about.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doorwatch/about/about.component.html":
/*!******************************************************!*\
  !*** ./src/app/doorwatch/about/about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/doorwatch/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/doorwatch/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/doorwatch/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/doorwatch/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/doorwatch/add-user/add-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/doorwatch/add-user/add-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doorwatch/add-user/add-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/doorwatch/add-user/add-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Some description text about what is happening here\n</p>\n\n\n<clr-datagrid>\n    <clr-dg-column>Card Id</clr-dg-column>\n    <clr-dg-column>Date</clr-dg-column>\n    <clr-dg-column>Add User</clr-dg-column>\n    <clr-dg-column>Delete</clr-dg-column>\n\n    <clr-dg-row *clrDgItems=\"let attempt of loginAttempts\">\n      <clr-dg-cell>{{attempt.id}}</clr-dg-cell>\n\n      <clr-dg-cell>{{attempt.date | date:'long'}}</clr-dg-cell>\n\n      <clr-dg-cell>\n        <button class=\"btn btn-success-outline btn-sm\" (click)=\"onAddUser(attempt)\">Add User</button>\n      </clr-dg-cell>\n\n      <clr-dg-cell>\n        <button class=\"btn btn-warning-outline btn-sm\" (click)=\"deleteLoginAttempt(attempt)\">Delete</button>\n      </clr-dg-cell>\n    </clr-dg-row>\n\n    <clr-dg-footer>\n        <clr-dg-pagination #pagination [clrDgPageSize]=\"5\">\n            {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n            of {{pagination.totalItems}} login attempts\n        </clr-dg-pagination>\n      </clr-dg-footer>\n</clr-datagrid>\n\n\n<clr-modal [(clrModalOpen)]=\"showAddUserModal\" [clrModalStaticBackdrop]=\"true\">\n    <h3 class=\"modal-title\">Create New User <span *ngIf=\"addableAtempt\">for CardId {{addableAtempt.id}}</span></h3>\n    <div class=\"modal-body\">\n        <form clrForm>\n            <clr-input-container>\n                <label>First Name</label>\n                <input clrInput type=\"text\" [(ngModel)]=\"addUserFirstName\" name=\"example\" />\n            </clr-input-container>\n            <clr-input-container>\n                <label>Last Name</label>\n                <input clrInput type=\"text\" [(ngModel)]=\"addUserLastName\" name=\"example\" />\n            </clr-input-container>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"showAddUserModal = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!addUserFirstName || !addUserLastName\" (click)=\"addUser(addableAtempt, addUserFirstName, addUserLastName)\">Create User</button>\n    </div>\n</clr-modal>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/doorwatch/add-user/add-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/doorwatch/add-user/add-user.component.ts ***!
  \**********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_resort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resort.service */ "./src/app/services/resort.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService, resortService) {
        var _this = this;
        this.userService = userService;
        this.resortService = resortService;
        this.loginAttempts = [];
        this.resorts = [];
        this.showAddUserModal = false;
        this.addUserFirstName = '';
        this.addUserLastName = '';
        this.addUserResortIds = [];
        userService.fetchLoginAttempts().subscribe(function (attempts) {
            _this.loginAttempts = attempts;
        });
        resortService.fetchResorts().subscribe(function (resorts) {
            _this.resorts = resorts;
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onAddUser = function (attempt) {
        this.addableAtempt = attempt;
        this.showAddUserModal = true;
    };
    AddUserComponent.prototype.addUser = function (attempt, firstName, lastName) {
        this.userService.addUser(attempt, firstName, lastName);
        this.showAddUserModal = false;
    };
    AddUserComponent.prototype.deleteLoginAttempt = function (attempt) {
        this.userService.deleteLoginAttempt(attempt);
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/doorwatch/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/doorwatch/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_resort_service__WEBPACK_IMPORTED_MODULE_2__["ResortService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/doorwatch/doorwatch.component.css":
/*!***************************************************!*\
  !*** ./src/app/doorwatch/doorwatch.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 10px 20px;\n}\n"

/***/ }),

/***/ "./src/app/doorwatch/doorwatch.component.html":
/*!****************************************************!*\
  !*** ./src/app/doorwatch/doorwatch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-6\">\n    <div class=\"branding\">\n      <a routerLink=\"home\" routerLinkActive=\"active\" class=\"nav-link\">\n        <clr-icon shape=\"users\" style=\"color: white;\"></clr-icon>\n        <span class=\"title\">Doorwatch</span>\n      </a>\n    </div>\n    <div class=\"header-nav\">\n        <a routerLink=\"home\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Home</a>\n        <a routerLink=\"overview\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Overview</a>\n        <a routerLink=\"addUser\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Add User</a>\n    </div>\n    <div class=\"header-actions\">\n        <clr-dropdown>\n            <button class=\"nav-icon\" clrDropdownTrigger>\n                <clr-icon shape=\"cog\"></clr-icon>\n                <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n            <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                <a routerLink=\"about\" clrDropdownItem>About</a>\n                <a routerLink=\"home\" clrDropdownItem>Preferences</a>\n                <a routerLink=\"/login\" clrDropdownItem>Log out</a>\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n  </header>\n\n  <main class=\"content\">\n    <router-outlet></router-outlet>\n  </main>\n"

/***/ }),

/***/ "./src/app/doorwatch/doorwatch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/doorwatch/doorwatch.component.ts ***!
  \**************************************************/
/*! exports provided: DoorwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorwatchComponent", function() { return DoorwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoorwatchComponent = /** @class */ (function () {
    function DoorwatchComponent() {
    }
    DoorwatchComponent.prototype.ngOnInit = function () {
    };
    DoorwatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-doorwatch',
            template: __webpack_require__(/*! ./doorwatch.component.html */ "./src/app/doorwatch/doorwatch.component.html"),
            styles: [__webpack_require__(/*! ./doorwatch.component.css */ "./src/app/doorwatch/doorwatch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoorwatchComponent);
    return DoorwatchComponent;
}());



/***/ }),

/***/ "./src/app/doorwatch/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/doorwatch/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doorwatch/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/doorwatch/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Hey Ressortleiter!</h2>\n<h4>Willkommen im Doorwatch-Verwaltungssystem!</h4>\n\n<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo, fugit fuga aspernatur officiis\n  numquam labore asperiores rem, reprehenderit perferendis accusantium? Autem, eum culpa aspernatur nihil ad iure\n  aliquid?</p>\n\n<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo, fugit fuga aspernatur officiis\n  numquam labore asperiores rem, reprehenderit perferendis accusantium? Autem, eum culpa aspernatur nihil ad iure\n  aliquid?</p>\n\n<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dicta explicabo, fugit fuga aspernatur officiis\n  numquam labore asperiores rem, reprehenderit perferendis accusantium? Autem, eum culpa aspernatur nihil ad iure\n  aliquid?</p>\n"

/***/ }),

/***/ "./src/app/doorwatch/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/doorwatch/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/doorwatch/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/doorwatch/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/doorwatch/overview/overview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/doorwatch/overview/overview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doorwatch/overview/overview.component.html":
/*!************************************************************!*\
  !*** ./src/app/doorwatch/overview/overview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<clr-datagrid>\n\n    <clr-dg-column>User Id</clr-dg-column>\n    <clr-dg-column>First Name <clr-dg-string-filter [clrDgStringFilter]=\"firstNameFilter\"></clr-dg-string-filter></clr-dg-column>\n    <clr-dg-column>Last Name <clr-dg-string-filter [clrDgStringFilter]=\"lastNameFilter\"></clr-dg-string-filter></clr-dg-column>\n    <clr-dg-column>Resorts <clr-dg-string-filter [clrDgStringFilter]=\"resortFilter\"></clr-dg-string-filter></clr-dg-column>\n    <clr-dg-column>Last Login</clr-dg-column>\n    <clr-dg-column>Status</clr-dg-column>\n    <clr-dg-column>Activate</clr-dg-column>\n    <!-- <clr-dg-column>Delete User</clr-dg-column> -->\n\n    <clr-dg-row *clrDgItems=\"let user of users\">\n      <clr-dg-cell>{{user.id}}</clr-dg-cell>\n\n      <clr-dg-cell>{{user.firstName}}</clr-dg-cell>\n\n      <clr-dg-cell>{{user.lastName}}</clr-dg-cell>\n\n      <clr-dg-cell>\n        <span *ngFor=\"let resort of user.resortIds\">\n          {{resort}}\n        </span>\n      </clr-dg-cell>\n\n      <clr-dg-cell>{{user.lastLogin | date:'fullDate'}}</clr-dg-cell>\n\n      <clr-dg-cell>\n        <span *ngIf=\"user.deactivated\">Deactivated</span>\n        <span *ngIf=\"!user.deactivated\">Not Deactivated</span>\n      </clr-dg-cell>\n\n      <clr-dg-cell>\n        <button class=\"btn btn-success-outline btn-sm\" *ngIf=\"user.deactivated\" (click)=\"activateUser(user)\">Activate</button>\n        <button class=\"btn btn-warning-outline btn-sm\" *ngIf=\"!user.deactivated\" (click)=\"deactivateUser(user)\">Deactivate</button>\n      </clr-dg-cell>\n\n      <!-- <clr-dg-cell>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"deleteUser(user)\">Delete User</button>\n      </clr-dg-cell> -->\n    </clr-dg-row>\n\n    <clr-dg-footer>\n      <clr-dg-pagination #pagination [clrDgPageSize]=\"5\">\n          {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n          of {{pagination.totalItems}} users\n      </clr-dg-pagination>\n    </clr-dg-footer>\n  </clr-datagrid>\n\n  <clr-modal [(clrModalOpen)]=\"basic\" [clrModalStaticBackdrop]=\"true\">\n      <h3 class=\"modal-title\">Delete User</h3>\n      <div class=\"modal-body\">\n          <p>Are you sure you want to delete FIRSTNAME LASTNAME?</p>\n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline\" (click)=\"basic = false\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"basic = false\">Delete User</button>\n      </div>\n  </clr-modal>\n\n\n\n"

/***/ }),

/***/ "./src/app/doorwatch/overview/overview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/doorwatch/overview/overview.component.ts ***!
  \**********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstNameFilter = /** @class */ (function () {
    function FirstNameFilter() {
    }
    FirstNameFilter.prototype.accepts = function (user, search) {
        return ('' + user.firstName === search ||
            user.firstName.toLowerCase().indexOf(search) >= 0);
    };
    return FirstNameFilter;
}());
var LastNameFilter = /** @class */ (function () {
    function LastNameFilter() {
    }
    LastNameFilter.prototype.accepts = function (user, search) {
        return ('' + user.lastName === search ||
            user.lastName.toLowerCase().indexOf(search) >= 0);
    };
    return LastNameFilter;
}());
var ResortFilter = /** @class */ (function () {
    function ResortFilter() {
    }
    ResortFilter.prototype.accepts = function (user, search) {
        for (var _i = 0, _a = user.resortIds; _i < _a.length; _i++) {
            var resort = _a[_i];
            if ('' + resort === search ||
                resort.toLowerCase().indexOf(search) >= 0) {
                return true;
            }
        }
        return false;
    };
    return ResortFilter;
}());
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.firstNameFilter = new FirstNameFilter();
        this.lastNameFilter = new LastNameFilter();
        this.resortFilter = new ResortFilter();
        this.users = [];
        this.basic = false;
        this.userService.fetchUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    OverviewComponent.prototype.ngOnInit = function () { };
    OverviewComponent.prototype.activateUser = function (user) {
        this.userService.activateUser(user);
    };
    OverviewComponent.prototype.deactivateUser = function (user) {
        this.userService.deactivateUser(user);
    };
    OverviewComponent.prototype.deleteUser = function (user) {
        this.userService.deleteUser(user);
    };
    OverviewComponent.prototype.updateUser = function (user) {
        this.userService.updateUser(user);
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/doorwatch/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/doorwatch/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.authService.userIsAuthenticated();
        var isAdmin = this.authService.userIsAdmin();
        if (!isAuthenticated || !isAdmin) {
            this.router.navigate(['/login']);
        }
        return this.authService.userIsAuthenticated() && this.authService.userIsAdmin();
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.authService.userIsAuthenticated();
        var isAdmin = this.authService.userIsAdmin();
        if (!isAuthenticated || isAdmin) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated && !isAdmin;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <form class=\"login\">\n        <section class=\"title\">\n            <h3 class=\"welcome\">Welcome to</h3>\n            Company Product Name\n        </section>\n        <div class=\"login-group\">\n            <input class=\"username\" type=\"text\" id=\"login_username\" placeholder=\"Username\">\n            <input class=\"password\" type=\"password\" id=\"login_password\" placeholder=\"Password\">\n            <!-- <div class=\"error active\">\n                Invalid user name or password\n            </div> -->\n            <button type=\"submit\" class=\"btn btn-primary\" (submit)=\"onSubmit($event)\">LOGIN</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (event) {
        console.log(event);
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vwi-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.userIsAuthenticated = function () {
        return true;
    };
    AuthenticationService.prototype.userIsAdmin = function () {
        return true;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/resort.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/resort.service.ts ***!
  \********************************************/
/*! exports provided: ResortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResortService", function() { return ResortService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResortService = /** @class */ (function () {
    function ResortService(http) {
        var _this = this;
        this.http = http;
        this.resorts = [];
        this.resortsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        http.get('http://localhost:3000/api/resorts').subscribe(function (resorts) {
            _this.resorts = resorts;
            _this.resortsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_this.resorts));
        });
    }
    ResortService.prototype.fetchResorts = function () {
        return this.resortsSubject.asObservable();
    };
    ResortService.prototype.addResort = function (name, leaderId) {
        var resort = {
            id: '' + this.resorts.length + 1,
            name: name,
            leaderId: leaderId
        };
        this.resorts.push(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](resort));
        this.resortsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.resorts));
    };
    ResortService.prototype.deleteResort = function (resort) {
        this.resorts = this.resorts.filter(function (r) { return r.id !== resort.id; });
        this.resortsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.resorts));
    };
    ResortService.prototype.updateResort = function (resort) {
        var index = this.resorts.findIndex(function (r) { return r.id === resort.id; });
        this.resorts[index] = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](resort);
        this.resortsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.resorts));
    };
    ResortService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ResortService);
    return ResortService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.users = [];
        this.loginAttempts = [];
        this.loginAttemptsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.usersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        http.get('http://localhost:3000/api/users').subscribe(function (users) {
            _this.users = users;
            _this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](_this.users));
        });
        http.get('http://localhost:3000/attempts').subscribe(function (attempts) {
            _this.loginAttempts = attempts;
            _this.loginAttemptsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](_this.loginAttempts));
        });
    }
    UserService.prototype.fetchUsers = function () {
        return this.usersSubject.asObservable();
    };
    UserService.prototype.fetchLoginAttempts = function () {
        return this.loginAttemptsSubject.asObservable();
    };
    UserService.prototype.addUser = function (attempt, firstName, lastName) {
        var user = {
            id: attempt.id,
            firstName: firstName,
            lastName: lastName,
            resortIds: [],
            deactivated: false,
            lastLogin: lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](attempt.date)
        };
        this.users.push(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](user));
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.users));
    };
    UserService.prototype.updateUser = function (user) {
        var index = this.users.findIndex(function (u) { return u.id === user.id; });
        this.users[index] = lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](user);
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.users));
    };
    UserService.prototype.deleteUser = function (user) {
        this.users = this.users.filter(function (u) { return u.id !== user.id; });
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.users));
    };
    UserService.prototype.deleteLoginAttempt = function (attempt) {
        this.loginAttempts = this.loginAttempts.filter(function (a) { return a.id !== attempt.id; });
        this.loginAttemptsSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.loginAttempts));
    };
    UserService.prototype.deactivateUser = function (user) {
        this.users.find(function (u) { return u.id === user.id; }).deactivated = true;
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.users));
    };
    UserService.prototype.activateUser = function (user) {
        this.users.find(function (u) { return u.id === user.id; }).deactivated = false;
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.users));
    };
    UserService.prototype.getUserById = function (id) {
        return this.users.find(function (u) { return u.id === id; });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /Users/christophstein/Documents/dev/vwi/doorwatch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map