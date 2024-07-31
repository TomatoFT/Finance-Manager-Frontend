import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = "";
  password: string = "";
  email: string = "";
  phone: string = "";

  constructor(private http: HttpClient, 
              private router: Router,
              private authService: AuthService) {}
  onSubmit() {
    // Send the login credentials to the backend
    const registerData = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };
}
}