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
var common_1 = require('angular2/common');
var common_2 = require('angular2/common');
var NewFormBuilderContactComponent = (function () {
    function NewFormBuilderContactComponent(_contactServices, _router, _routeparam, _formbuilder) {
        this._contactServices = _contactServices;
        this._router = _router;
        this._routeparam = _routeparam;
        this._formbuilder = _formbuilder;
    }
    NewFormBuilderContactComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this._contactServices.insertContact(value);
        this._router.navigate(["Contact-List"]);
    };
    NewFormBuilderContactComponent.prototype.ngOnInit = function () {
        this.myForm = this._formbuilder.group({
            'firstname': ['', common_2.Validators.required],
            'lastname': [this._routeparam.get("lastName"), common_2.Validators.required],
            'phone': ['', common_2.Validators.required],
            'email': ['', common_2.Validators.required],
        });
    };
    NewFormBuilderContactComponent = __decorate([
        core_1.Component({
            template: "\n            <form (ngSubmit) ='onSubmit(myForm.value)' [ngFormModel]='myForm' >\n                <div>\n                <label for =\"first-name\">First Name</label>            \n                <input type=\"text\" id='First-name' \n                    [ngFormControl]='myForm.controls.firstname'\n                 />\n                    \n                </div>\n                <div>\n                <label for =\"last-name\">Last Name</label>            \n                <input type=\"text\" id='Last-name'\n                [ngFormControl]='myForm.controls.lastname'\n                />\n                </div>\n                <div>\n                <label for =\"phone\">phone</label>            \n                <input type=\"text\" id='Phone'  \n                [ngFormControl]='myForm.controls.phone'\n                 />\n                </div>\n                <div>\n                <label for =\"email\" #email>Email</label>            \n                <input type=\"email\" id='Email' \n                [ngFormControl]='myForm.controls.email'\n                />\n                </div>\n                <div><button type='submit' [disabled]='!myForm.valid' >Create Contact </button> </div>\n            </form>\n            ",
            providers: [contact_services_1.ContactService],
            styles: ["\n                    label{\n                        display:inline-block;\n                        width:170px;\n                        }\n                    input{\n                        width:250px\n                        }\n                    .ng-invalid{ border:1px solid red;}\n              "]
        }), 
        __metadata('design:paramtypes', [contact_services_1.ContactService, router_1.Router, router_2.RouteParams, common_1.FormBuilder])
    ], NewFormBuilderContactComponent);
    return NewFormBuilderContactComponent;
})();
exports.NewFormBuilderContactComponent = NewFormBuilderContactComponent;
//# sourceMappingURL=new-formbuilder-contact.js.map