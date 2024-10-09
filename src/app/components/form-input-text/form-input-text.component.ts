import { Component, inject, Input, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-input-text',
  standalone: true,
  imports: [MatFormFieldModule,
     MatLabel,
     MatIcon,
     MatHint,
     MatInputModule,
     ReactiveFormsModule,
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
      // useExisting: FormGroupDirective
    },
  ],
  templateUrl: './form-input-text.component.html',
  styleUrl: './form-input-text.component.css',
})
export class FormInputTextComponent {
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
