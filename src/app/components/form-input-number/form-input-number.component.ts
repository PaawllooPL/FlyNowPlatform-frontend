import { Component, inject, Input, SkipSelf } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-input-number',
  standalone: true,
  imports: [ReactiveFormsModule,
            MatFormFieldModule,
            MatIcon,
            MatInputModule
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  templateUrl: './form-input-number.component.html',
  styleUrl: './form-input-number.component.css'
})
export class FormInputNumberComponent {
  @Input() inputLabel?: string;
  @Input() inputFormControlName!: string;
  @Input() inputPlaceholder?: string;
  @Input() inputIcon?: string;
  @Input() inputHint?: string;

  parentContainer = inject(ControlContainer);

  get parentFormGroup () {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.inputFormControlName, new FormControl());
  }
  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.inputFormControlName);
  }
}
