import { Component, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatFabButton,
    RouterLink,
    RouterOutlet,
    ListButtonComponent,
    ListButtonContainerComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = signal(true);

  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  } 
  
}
