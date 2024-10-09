import { Component, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from '../../components/form-input-text/form-input-text.component';
import { FormHideableInputTextComponent } from '../../components/form-hideable-input-text/form-hideable-input-text.component';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { ListSubmitButtonComponent } from "../../components/list-submit-button/list-submit-button.component";
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
    ListSubmitButtonComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = signal(true);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({});
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
  togglePasswordVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  } 
  
}
