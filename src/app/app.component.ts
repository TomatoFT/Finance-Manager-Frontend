import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is the root URL
        this.showSidebar = event.url !== '/' && event.urlAfterRedirects !== '/';
      }
    });
  }
}


