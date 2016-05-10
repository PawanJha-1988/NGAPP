import {Component} from'angular2/core'
import {Router} from 'angular2/router';
import {Contact} from './Contact';

@Component({
    selector: 'contact',
    template: ` <div>
                <div>
                <label for ="first-name">First Name</label>            
                <input type="text" [(ngModel)] ="contact.firstname" id='first-name' />
                </div>
                <div>
                <label for ="last-name">Last Name</label>            
                <input type="text" id='last-name'  [(ngModel)] ="contact.lastname" />
                </div>
                <div>
                <label for ="phone">phone</label>            
                <input type="text" id='phone' [(ngModel)] ="contact.phone" />
                </div>
                <div>
                <label for ="email" #email>Email</label>            
                <input type="text" id='email' [(ngModel)] ="contact.email" />
                </div>
                <div><button (click)='onCreateNew()'>Create New Contact from above selected Contact</button> </div>
            </div>`
    , inputs: ["contact"]
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
export class ContactComponent {
    public contact: Contact = null;
    constructor(private _router: Router) { }
    public onCreateNew() {
        //this._router.navigate(["New-Contact", { lastname: this.contact.lastname }]);
        this._router.navigate(["New-Contact-form", { lastname: this.contact.lastname }])
    }
}
