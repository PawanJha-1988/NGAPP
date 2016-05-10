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
var contact_Component_1 = require('./contact.Component');
var contact_services_1 = require('./contact.services');
var ContactListComponent = (function () {
    function ContactListComponent(_ContactService) {
        this._ContactService = _ContactService;
        //public selectedContact = {};
        this.selectedContact = null;
    }
    ContactListComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    ContactListComponent.prototype.getContact = function () {
        var _this = this;
        this._ContactService.getContact().then(function (contactlist) { return _this.contactlist = contactlist; });
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contactlist',
            template: "\n            <ul>\n                <li *ngFor=\"#contact of contactlist\" (click)=\"onSelect(contact)\">\n                    {{contact.firstname+\"   \"+contact.lastname | uppercase}}\n                </li>    \n            </ul>\n            <contact *ngIf='selectedContact !==null' [contact] = \"selectedContact\"> </contact>\n            ",
            providers: [contact_services_1.ContactService],
            directives: [contact_Component_1.ContactComponent]
        }), 
        __metadata('design:paramtypes', [contact_services_1.ContactService])
    ], ContactListComponent);
    return ContactListComponent;
})();
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contactlist.Component.js.map