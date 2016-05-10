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
var ContactComponent = (function () {
    function ContactComponent(_router) {
        this._router = _router;
        this.contact = null;
    }
    ContactComponent.prototype.onCreateNew = function () {
        //this._router.navigate(["New-Contact", { lastname: this.contact.lastname }]);
        this._router.navigate(["New-Contact-form", { lastname: this.contact.lastname }]);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: " <div>\n                <div>\n                <label for =\"first-name\">First Name</label>            \n                <input type=\"text\" [(ngModel)] =\"contact.firstname\" id='first-name' />\n                </div>\n                <div>\n                <label for =\"last-name\">Last Name</label>            \n                <input type=\"text\" id='last-name'  [(ngModel)] =\"contact.lastname\" />\n                </div>\n                <div>\n                <label for =\"phone\">phone</label>            \n                <input type=\"text\" id='phone' [(ngModel)] =\"contact.phone\" />\n                </div>\n                <div>\n                <label for =\"email\" #email>Email</label>            \n                <input type=\"text\" id='email' [(ngModel)] =\"contact.email\" />\n                </div>\n                <div><button (click)='onCreateNew()'>Create New Contact from above selected Contact</button> </div>\n            </div>",
            inputs: ["contact"],
            styles: ["\n                    label{\n                        display:inline-block;\n                        width:170px;\n                        }\n                    input{\n                        width:250px\n                        }\n              "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactComponent);
    return ContactComponent;
})();
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.Component.js.map