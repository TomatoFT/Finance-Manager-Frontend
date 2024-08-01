import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = true;
  isBudgetUrl: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = event.url !== '/' 
          && event.urlAfterRedirects !== '/' 
          && event.url !== '/auth/signup';

        this.isBudgetUrl = event.url.startsWith('/budget');
      }
    });
  }
}
