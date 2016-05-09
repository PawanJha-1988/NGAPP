import {Component} from 'angular2/core';
import {ContactComponent} from './contact.Component';
import {ContactService} from './contact.services';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';
@Component({
    selector: 'contactlist',
    template: `
            <ul>
                <li *ngFor="#contact of contactlist" (click)="onSelect(contact)">
                    {{contact.firstname+"   "+contact.lastname}}
                </li>    
            </ul>
            <contact [Contact] = "selectedContact"> </contact>
            `,
    providers: [ContactService],
    directives: [ContactComponent]

})
export class ContactListComponent implements OnInit {
    //public contactlist = [
    //    { firstname: 'Pawan', lastname: 'Jha', Email: 'pawanjha.delhi@gmail.com', phone: '9968831967' },
    //    { firstname: 'Puneet', lastname: 'Sri', Email: 'Puneet@gmail.com', phone: '9968831967' },
    //    { firstname: 'Lav', lastname: 'Singh', Email: 'lav@gmail.com', phone: '9968831967' },
    //    { firstname: 'Amit', lastname: 'pagal', Email: 'pagla@gmail.com', phone: '9968831967' },
    //    { firstname: 'Atul', lastname: 'Panda', Email: 'panda@gmail.com', phone: '9968831967' },
    //    { firstname: 'Rudra', lastname: 'Pratap', Email: 'rp@gmail.com', phone: '9968831967' }
    //]

    public contactlist: Contact[];
    constructor(private _ContactService: ContactService) { }

    public selectedContact = {};
    public onSelect(contact) {
        this.selectedContact = contact;
    }

    getContact() {
        this._ContactService.getContact().then((contactlist: Contact[]) => this.contactlist = contactlist);
    }
    ngOnInit(): any {
        this.getContact();
    }

}