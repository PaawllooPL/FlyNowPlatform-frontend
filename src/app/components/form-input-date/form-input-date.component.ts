import { Component, Input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-form-input-date',
  standalone: true,
  imports: [
    MatFormField,
    MatDatepickerModule,
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
