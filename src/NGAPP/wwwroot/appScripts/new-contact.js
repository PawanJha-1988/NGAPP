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
var contact_services_1 = require('./contact.services');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var NewContactComponent = (function () {
    function NewContactComponent(_contactServices, _router, _routeparam) {
        this._contactServices = _contactServices;
        this._router = _router;
        this._routeparam = _routeparam;
        this.passedlastname = "";
    }
    NewContactComponent.prototype.OnAddContact = function (firstname, lastname, phone, email) {
        //const dummycontact = { firstname: 'Dummy', lastname: 'Contact', email: '', phone: '' }
        var contact = { firstname: firstname, lastname: lastname, email: email, phone: phone };
        this._contactServices.insertContact(contact);
        this._router.navigate(["Contact-List"]);
    };
    NewContactComponent.prototype.ngOnInit = function () {
        this.passedlastname = this._routeparam.get("lastname");
    };
    NewContactComponent = __decorate([
        core_1.Component({
            template: "\n            <div>\n                <div>\n                <label for =\"first-name\">First Name</label>            \n                <input type=\"text\" id='first-name' #firstname />\n                </div>\n                <div>\n                <label for =\"last-name\">Last Name</label>            \n                <input type=\"text\" id='last-name' #lastname  value=\"{{passedlastname}}\" />\n                </div>\n                <div>\n                <label for =\"phone\">phone</label>            \n                <input type=\"text\" id='phone' #phone />\n                </div>\n                <div>\n                <label for =\"email\" #email>Email</label>            \n                <input type=\"text\" id='email' />\n                </div>\n                <div><button (click)='OnAddContact(firstname.value,lastname.value,phone.value,email.value)'>Create Contact </button> </div>\n            </div>\n            ",
            providers: [contact_services_1.ContactService],
            styles: ["\n                    label{\n                        display:inline-block;\n                        width:170px;\n                        }\n                    input{\n                        width:250px\n                        }\n              "]
        }), 
        __metadata('design:paramtypes', [contact_services_1.ContactService, router_1.Router, router_2.RouteParams])
    ], NewContactComponent);
    return NewContactComponent;
})();
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.js.map