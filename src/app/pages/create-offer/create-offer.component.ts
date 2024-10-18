import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from "../../components/form-input-text/form-input-text.component";
import { NgFor } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatFabButton } from '@angular/material/button';
import { ListSubmitButtonComponent } from '../../components/list-submit-button/list-submit-button.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-create-offer',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputTextComponent, NgFor, MatFormField, MatLabel, MatFabButton, ListSubmitButtonComponent, MatIcon],
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
    form.append('seats', this.createOfferForm.get('createOfferSeats')?.value);
    form.append('price', this.createOfferForm.get('createOfferPrice')?.value);
    form.append('aircraftType', this.createOfferForm.get('aircraftTypeOption')?.value);
    form.append('description', this.createOfferForm.get('createOfferDescription')?.value);
    form.append('image', this.selectedFile, this.selectedFile!.name);
    
    form.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
}
