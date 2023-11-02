import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Define your navigation items here
  navItems = [
    { name: 'Logout', route: '/auth/logout' },
    { name: 'Refresh', route: '/auth/refresh' },
    { name: 'Budget', route: '/budget' }
  ];
}