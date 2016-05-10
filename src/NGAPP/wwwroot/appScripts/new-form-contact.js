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
var NewFormContactComponent = (function () {
    function NewFormContactComponent(_contactServices, _router, _routeparam) {
        this._contactServices = _contactServices;
        this._router = _router;
        this._routeparam = _routeparam;
    }
    NewFormContactComponent.prototype.onSubmit = function () {
        console.log(this.newContact);
        this._contactServices.insertContact(this.newContact);
        this._router.navigate(["Contact-List"]);
    };
    NewFormContactComponent.prototype.ngOnInit = function () {
        this.newContact = { firstname: '', lastname: this._routeparam.get("lastname"), phone: '', email: '' };
    };
    NewFormContactComponent = __decorate([
        core_1.Component({
            template: "\n            <form #myForm ='ngForm' (ngSubmit) ='onSubmit()'>\n                <div>\n                <label for =\"first-name\">First Name</label>            \n                <input type=\"text\" id='First-name' \n                    ngControl='FirstName' required [(ngModel)]='newContact.firstname'\n                    #FirstName ='ngForm'\n                    />\n                    <span *ngIf='!FirstName.valid'>Not Valid</span>\n                </div>\n                <div>\n                <label for =\"last-name\">Last Name</label>            \n                <input type=\"text\" id='Last-name' ngControl='LastName' required  [(ngModel)]='newContact.lastname' />\n                </div>\n                <div>\n                <label for =\"phone\">phone</label>            \n                <input type=\"text\" id='Phone'  ngControl='Phone' required  [(ngModel)]='newContact.phone'/>\n                </div>\n                <div>\n                <label for =\"email\" #email>Email</label>            \n                <input type=\"email\" id='Email' ngControl='Email'  required  [(ngModel)]='newContact.email'/>\n                </div>\n                <div><button type='submit' [disabled] ='!myForm.form.valid' >Create Contact </button> </div>\n            </form>\n            ",
            providers: [contact_services_1.ContactService],
            styles: ["\n                    label{\n                        display:inline-block;\n                        width:170px;\n                        }\n                    input{\n                        width:250px\n                        }\n                    .ng-invalid{ border:1px solid red;}\n              "]
        }), 
        __metadata('design:paramtypes', [contact_services_1.ContactService, router_1.Router, router_2.RouteParams])
    ], NewFormContactComponent);
    return NewFormContactComponent;
})();
exports.NewFormContactComponent = NewFormContactComponent;
//# sourceMappingURL=new-form-contact.js.map