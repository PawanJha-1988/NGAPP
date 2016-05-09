import {Component} from'angular2/core'


@Component({
    selector: 'contact',
    template: ` <div>
                <input type="text" [(ngModel)] ="Contact.firstname"  />
                <br />
                Email: {{Contact.Email}}
                <br />  
                Phone: {{Contact.phone}}
                <br />
            </div>`
    , inputs:["Contact"]

})
export class ContactComponent {
    public Contact = {};
}
