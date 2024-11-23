import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Roles } from './models/roles.enum';
import { AuthService } from './services/auth/auth.service';
import { Permission } from './models/permissions/permissions.enum';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSlideToggle,
    MatButton,
    MatMenuItem,
    MatMenuModule,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatFabButton,
    MatTooltipModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router){}
  authService = inject(AuthService);
  Permission = Permission;
  // isAuthenticated = this.authService.isAuthenticated();
  title = 'FlyNow';
  role: string = Roles.user;
  Roles = Roles;
  requiredRoles: Array<string> = [Roles.admin, Roles.organizer, Roles.user];

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  onLogout() {
    this.authService.logout();
  }
}
