import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NotificationsService} from "../../services/notifications.service";

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss']
})
export class NotificationButtonComponent implements OnInit{

  notificationsCount$!:Observable<number>

  constructor(private notificationService:NotificationsService) {
  }

  ngOnInit(): void {
    this.notificationsCount$=this.notificationService.count$
  }


}
