import {Component} from 'angular2/core'
import {ContactService} from './contact.services';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common'
import {FormBuilder} from 'angular2/common'
import {Validators} from 'angular2/common'
@Component({
    template: `
            <form (ngSubmit) ='onSubmit(myForm.value)' [ngFormModel]='myForm' >
                <div>
                <label for ="first-name">First Name</label>            
                <input type="text" id='First-name' 
                    [ngFormControl]='myForm.controls.firstname'
                 />
                    
                </div>
                <div>
                <label for ="last-name">Last Name</label>            
                <input type="text" id='Last-name'
                [ngFormControl]='myForm.controls.lastname'
                />
                </div>
                <div>
                <label for ="phone">phone</label>            
                <input type="text" id='Phone'  
                [ngFormControl]='myForm.controls.phone'
                 />
                </div>
                <div>
                <label for ="email" #email>Email</label>            
                <input type="email" id='Email' 
                [ngFormControl]='myForm.controls.email'
                />
                </div>
                <div><button type='submit' [disabled]='!myForm.valid' >Create Contact </button> </div>
            </form>
            `
    , providers: [ContactService]
    , styles: [`
                    label{
                        display:inline-block;
                        width:170px;
                        }
                    input{
                        width:250px
                        }
                    .ng-invalid{ border:1px solid red;}
              `]
})
export class NewFormBuilderContactComponent implements OnInit {


    myForm: ControlGroup;
    constructor(private _contactServices: ContactService, private _router: Router, private _routeparam: RouteParams, private _formbuilder: FormBuilder) { }
    public onSubmit(value) {
        console.log(value);
        this._contactServices.insertContact(value);
        this._router.navigate(["Contact-List"])
    }
    ngOnInit(): any {
        this.myForm = this._formbuilder.group({
            'firstname': ['', Validators.required],
            'lastname': [this._routeparam.get("lastName"), Validators.required],
            'phone': ['', Validators.required],
            'email': ['', Validators.required],
        });
    }
}