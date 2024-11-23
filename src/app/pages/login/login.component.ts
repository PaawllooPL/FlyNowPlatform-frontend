import { Component, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ListSubmitButtonComponent } from '../../components/list-submit-button/list-submit-button.component';
import { FormComponent } from '../../components/form/form.component';
import { FormInputTextComponent } from '../../components/form-input-text/form-input-text.component';
import { FormHideableInputTextComponent } from '../../components/form-hideable-input-text/form-hideable-input-text.component';
import { AuthService } from '../../services/auth/auth.service';
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
    ListButtonContainerComponent,
    ListSubmitButtonComponent,
    ReactiveFormsModule,
    FormComponent,
    FormInputTextComponent,
    FormHideableInputTextComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  hide = signal(true);
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({});
  }
  
  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  get formEmail() {return this.loginForm.get('email');}
  get formPassword() {return this.loginForm.get('password');}

  onSubmit() {
    console.log(this.loginForm.value)

    this.authService.login(this.formEmail?.value, this.formPassword?.value)
    .subscribe(response => {
      if(response) {
        console.log("zalogowano")
        this.router.navigate(['/offers']);
      } else {
        console.log("nie zalogowano - error")

      }
    });
  }
}
