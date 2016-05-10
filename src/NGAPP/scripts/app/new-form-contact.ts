import {Component} from 'angular2/core'
import {ContactService} from './contact.services';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
@Component({
    template: `
            <form #myForm ='ngForm' (ngSubmit) ='onSubmit()'>
                <div>
                <label for ="first-name">First Name</label>            
                <input type="text" id='First-name' 
                    ngControl='FirstName' required [(ngModel)]='newContact.firstname'
                    #FirstName ='ngForm'
                    />
                    <span *ngIf='!FirstName.valid'>Not Valid</span>
                </div>
                <div>
                <label for ="last-name">Last Name</label>            
                <input type="text" id='Last-name' ngControl='LastName' required  [(ngModel)]='newContact.lastname' />
                </div>
                <div>
                <label for ="phone">phone</label>            
                <input type="text" id='Phone'  ngControl='Phone' required  [(ngModel)]='newContact.phone'/>
                </div>
                <div>
                <label for ="email" #email>Email</label>            
                <input type="email" id='Email' ngControl='Email'  required  [(ngModel)]='newContact.email'/>
                </div>
                <div><button type='submit' [disabled] ='!myForm.form.valid' >Create Contact </button> </div>
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
export class NewFormContactComponent implements OnInit {

    public  newContact: Contact;

    constructor(private _contactServices: ContactService, private _router: Router, private _routeparam: RouteParams) { }
    public onSubmit() {
        console.log(this.newContact);
        this._contactServices.insertContact(this.newContact);
        this._router.navigate(["Contact-List"])
    }
    ngOnInit(): any {
        this.newContact = { firstname: '', lastname: this._routeparam.get("lastname"), phone: '', email: '' };
    }
}