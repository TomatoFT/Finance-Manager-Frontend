import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  isLogOut: boolean = false;
  constructor(private authService: AuthService,
              private router: Router){}
  confirmLogout() {
    this.isLogOut = true;
    if(this.isLogOut) {
      this.authService.removeToken();
      this.isLogOut = false;
      this.router.navigate([''])
    }
  }
  cancelLogOut() {
    this.router.navigate(['/views'])
  }
}
