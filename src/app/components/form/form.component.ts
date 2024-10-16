import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { ListButtonContainerComponent } from "../list-button-container/list-button-container.component";
import { ListButtonComponent } from '../list-button/list-button.component';
import { ListSubmitButtonComponent } from '../list-submit-button/list-submit-button.component';
import { MatInputModule } from '@angular/material/input';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, 
            MatFormFieldModule,
            MatLabel,
            MatIcon,
            MatHint,
            MatInputModule,
            ListButtonContainerComponent,
            ListButtonContainerComponent,
            ListButtonComponent,
            ListSubmitButtonComponent,
            FormInputTextComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
