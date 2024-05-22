import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken = 'accessToken';
  private refreshToken = 'refreshToken';

  constructor() {}

  getAccessToken(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.accessToken) as string;
      // return this.accessToken as string
    }
    return "The Token is not Existed";
  }

  getRefreshToken(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.refreshToken) as string;
      // return this.refreshToken as string
    }
    return "The Token is not Existed";
  }


  setAccessToken(token: string): void {
    localStorage.setItem(this.accessToken, token);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshToken, token);
  }

  removeToken(): void {
    localStorage.setItem(this.accessToken, '');
    localStorage.setItem(this.refreshToken, '');
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    // Check if the token exists and is not expired
    return token !== null && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    // Implement your token expiration logic here
    // For simplicity, let's assume the token is always valid
    return false;
  }
}