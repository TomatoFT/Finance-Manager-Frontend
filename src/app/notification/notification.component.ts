import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications = [
    { title: 'Notification 1', content: 'Hello World' },
    { title: 'Notification 2', content: 'Another notification content' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
