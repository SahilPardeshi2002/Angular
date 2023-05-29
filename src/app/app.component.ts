import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Registration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';

  getValue(Name:string, Address:string, Contact:string, email:string ){
    this.displayname = Name;
    this.displayaddress = Address;
    this.displaycontact = Contact;
    this.displayemail = email;
  }
}
