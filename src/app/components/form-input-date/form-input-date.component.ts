import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-input-date',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatDatepickerModule,
    MatInput,
    MatInputModule,
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './form-input-date.component.html',
  styleUrl: './form-input-date.component.css'
})
export class FormInputDateComponent {
  @Input() inputFormControlName!: string;
}
