import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from "../../components/form-input-text/form-input-text.component";
import { NgFor } from '@angular/common';
import { MatFabButton } from '@angular/material/button';
import { ListSubmitButtonComponent } from '../../components/list-submit-button/list-submit-button.component';
import { MatIcon } from '@angular/material/icon';
import { FormInputNumberComponent } from "../../components/form-input-number/form-input-number.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormInputDateComponent } from "../../components/form-input-date/form-input-date.component";
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-create-offer',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormInputTextComponent,
    NgFor,
    MatFabButton,
    ListSubmitButtonComponent,
    MatIcon,
    FormInputNumberComponent,
    MatDatepickerModule,
    FormInputDateComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    
  ],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent {
  aircraftTypes: string[] = ['awionetka', 'szybowiec', 'helikopter', 'balon']
  createOfferForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.createOfferForm = this.fb.group({
      aircraftTypeOption: [],
      createOfferDescription: [],
      createOfferImage: [],
    });
  }

  onCreateFormSubmit() {
    // console.log(this.createOfferForm.value)
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const form = new FormData();
    form.append('title', this.createOfferForm.get('createOfferTitle')?.value);
    form.append('availableSeats', this.createOfferForm.get('createOfferSeats')?.value);
    form.append('pricePerPerson', this.createOfferForm.get('createOfferPrice')?.value);
    form.append('aircraftType', this.createOfferForm.get('aircraftTypeOption')?.value);
    form.append('description', this.createOfferForm.get('createOfferDescription')?.value);
    form.append('image', this.selectedFile, this.selectedFile!.name);
    form.append('duration', this.createOfferForm.get('createOfferDuration')?.value);
    
    form.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
}
