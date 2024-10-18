import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Roles } from './models/roles.enum';
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
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlyNow';
  role: string = Roles.User;
  Roles = Roles;
  requiredRoles = [Roles.Admin, Roles.Organizer, Roles.User];
}
