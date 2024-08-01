import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Define your navigation items here
  navItems = [
    { name: 'Dashboard', route: '/budget' },
    { name: 'Budget', route: '/budget' },
    { name: 'Expense', route: '/budget' },
    { name: 'User', route: '/budget' },
    { name: 'Notification', route: '/budget' },
    { name: 'Analysis', route: '/budget' },
    { name: 'Log Out', route: '/budget' },
  ];
}