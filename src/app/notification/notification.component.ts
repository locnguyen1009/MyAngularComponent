import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class = "alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                This website uses cookies to provide better user experience.
                <div class="close">
                  <button class="btn" (click) = "closeNotification()">X</button>
                </div>
            </div>`,
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  displayNotification = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
