/// <reference path="user.ts" />
/// <reference path="../../node_modules/angular2/router.d.ts" />

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {UserComponent } from './user';
import {ContactListComponent } from './contactlist.Component';
@Component({
    selector: 'my-app',    
    templateUrl: '/aa/app.html',
    directives: [ROUTER_DIRECTIVES, UserComponent, ContactListComponent]

})
@RouteConfig([
        { path: '/user', component: UserComponent, name: 'User' },
        { path: '/contact-list', component: ContactListComponent, name: 'Contact-List' },
    { path: '*', component: UserComponent }
])
export class AppComponent { }