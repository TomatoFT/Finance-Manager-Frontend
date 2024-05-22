import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient, 
              private router: Router,
              private authService: AuthService) {}

  onSubmit() {
    // Send the login credentials to the backend
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8000/auth/login/', loginData).subscribe(
      response => {
        // Assuming the backend returns a token in the response
        const refreshToken = response.refresh_token;
        const accessToken = response.access_token;
        // Store the token in local storage
        this.authService.setAccessToken(accessToken);
        this.authService.setRefreshToken(refreshToken);
        console.log(accessToken)

        // Redirect to the desired route after successful login
        this.router.navigate(['/budget']);
      },
      error => {
        // Handle login error
        console.log('Login failed:', error);
      }
    );
  }
}