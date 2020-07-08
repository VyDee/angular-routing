import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, 
    private router:Router) { }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
