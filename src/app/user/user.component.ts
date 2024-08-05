import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {
    firstname: 'John',
    lastname: 'Doe',
    fullname: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  };

  constructor() { }

  ngOnInit(): void {
  }

  editProfile() {
    console.log('Edit profile clicked');
    // Add logic to edit the profile
  }

  deleteProfile() {
    console.log('Delete profile clicked');
    // Add logic to delete the profile
  }
}
