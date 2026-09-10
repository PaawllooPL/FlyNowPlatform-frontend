import { Component, EventEmitter, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from '../../components/form-input-text/form-input-text.component';
import { FormHideableInputTextComponent } from '../../components/form-hideable-input-text/form-hideable-input-text.component';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { ListSubmitButtonComponent } from "../../components/list-submit-button/list-submit-button.component";
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatFabButton,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    FormInputTextComponent,
    FormHideableInputTextComponent,
    ListButtonContainerComponent,
    ListButtonComponent,
    ListSubmitButtonComponent,
],
providers: [
  
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  hide = signal(true);

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({});
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe({
      next: result => {
      this.router.navigate(['/login'])
    },
    error: error => {
      console.error(error);
    }
  }
  );
  }
  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  } 
  
}
