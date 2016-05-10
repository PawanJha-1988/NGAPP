/// <reference path="user.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var user_1 = require('./user');
var contactlist_Component_1 = require('./contactlist.Component');
var new_contact_1 = require('./new-contact');
var new_form_contact_1 = require('./new-form-contact');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/aa/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, user_1.UserComponent, contactlist_Component_1.ContactListComponent]
        }),
        router_1.RouteConfig([
            { path: '/user', component: user_1.UserComponent, name: 'User' },
            { path: '/contact-list', component: contactlist_Component_1.ContactListComponent, name: 'Contact-List', useAsDefault: true },
            { path: '/new-contact', component: new_contact_1.NewContactComponent, name: 'New-Contact' },
            { path: '/new-form-contact', component: new_form_contact_1.NewFormContactComponent, name: 'New-Contact-form' },
            //{ path: '/new-contact/:lastname', component: NewContactComponent, name: 'New-Contactfromcontact' },
            { path: '*', component: user_1.UserComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map