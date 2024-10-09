import { Component, inject, Input, signal } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-hideable-input-text',
  standalone: true,
  imports: [ReactiveFormsModule,
            MatFormFieldModule,
            MatIcon,
            MatInputModule
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true}),
      // useExisting: FormGroupDirective
    },
  ],
  templateUrl: './form-hideable-input-text.component.html',
  styleUrl: './form-hideable-input-text.component.css'
})
export class FormHideableInputTextComponent {
  hide = signal(true);
  @Input() inputLabel?: string;
  @Input() inputFormControlName!: string;
  @Input() inputPlaceholder?: string;
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

  toggleInputVisibility(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
