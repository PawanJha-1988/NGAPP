import {Component} from 'angular2/core';

@Component({

    //template: `Hello this is {{name}}`
    templateUrl: '/forms/users/user-form.html',
    styleUrls: ['forms/users/user-form.css']
})


export class UserComponent {
    name = "Pawan"
    public contact = { firstname: 'Pawan', lastname: 'Jha', Email: 'pawanjha.delhi@gmail.com', phone: '9968831967' }
    public showdetails = false;

    public showdetail() {
        this.showdetails = true
    }
}