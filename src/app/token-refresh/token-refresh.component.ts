import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-token-refresh',
  templateUrl: './token-refresh.component.html',
  styleUrls: ['./token-refresh.component.css']
})

export class TokenRefreshComponent implements OnInit {
  accessToken: string = "";
  refreshToken: string = "";
  refresh_token_data: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.refreshToken = this.authService.getRefreshToken();
    this.refresh_token_data = { "refresh_token": this.refreshToken };
  }
  
  onSubmit(): void {
    fetch(`http://localhost:8000/auth/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getAccessToken()}`
      },
      body: JSON.stringify(this.refresh_token_data)
    })
      .then(response => response.json())
      .then(data => {
        this.accessToken = data.access_token; // Assuming the response contains an accessToken property
        console.log(`New Access token is: ${this.accessToken}`)
        this.authService.setAccessToken(this.accessToken)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}