import {Component} from 'angular2/core'
import {ContactService} from './contact.services';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
@Component({
    template: `
            <div>
                <div>
                <label for ="first-name">First Name</label>            
                <input type="text" id='first-name' #firstname />
                </div>
                <div>
                <label for ="last-name">Last Name</label>            
                <input type="text" id='last-name' #lastname  value="{{passedlastname}}" />
                </div>
                <div>
                <label for ="phone">phone</label>            
                <input type="text" id='phone' #phone />
                </div>
                <div>
                <label for ="email" #email>Email</label>            
                <input type="text" id='email' />
                </div>
                <div><button (click)='OnAddContact(firstname.value,lastname.value,phone.value,email.value)'>Create Contact </button> </div>
            </div>
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
              `]
})
export class NewContactComponent  implements OnInit  {

    public passedlastname = "";
    constructor(private _contactServices: ContactService, private _router: Router, private _routeparam : RouteParams) { }
    public OnAddContact(firstname, lastname, phone, email) {   
        //const dummycontact = { firstname: 'Dummy', lastname: 'Contact', email: '', phone: '' }
        let contact: Contact = { firstname: firstname, lastname: lastname, email: email, phone: phone }
        this._contactServices.insertContact(contact);
        this._router.navigate(["Contact-List"])
    }
    ngOnInit(): any {
        this.passedlastname  = this._routeparam.get("lastname");
    }
}