import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from "../../components/form-input-text/form-input-text.component";
import { NgFor } from '@angular/common';
import { MatFabButton } from '@angular/material/button';
import { ListSubmitButtonComponent } from '../../components/list-submit-button/list-submit-button.component';
import { MatIcon } from '@angular/material/icon';
import { FormInputNumberComponent } from "../../components/form-input-number/form-input-number.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormInputDateComponent } from "../../components/form-input-date/form-input-date.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, NativeDateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { OfferService } from '../../services/offer/offer.service';
import { Router } from '@angular/router';
import{MatSelectModule} from '@angular/material/select'
import { Voivodeships } from '../../models/voivodeships.enum';

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
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    provideNativeDateAdapter(),
  ],
  templateUrl: './create-offer.component.html',
  styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent {
  aircraftTypes: string[] = ['awionetka', 'szybowiec', 'helikopter', 'balon']
  voivodeships = Object.entries(Voivodeships);
  createOfferForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private offerService: OfferService, private router: Router) {
    this.createOfferForm = this.fb.group({
      aircraftTypeOption: [],
      voivodeshipOption: [],
      createOfferDescription: [],
      createOfferImage: [],
      flightDateTime: [],
    });
  }

  onCreateFormSubmit() {
    console.log(this.createOfferForm.get('flightDateTime')!.value)
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const form = new FormData();
    form.append('title', this.createOfferForm.get('createOfferTitle')?.value);
    form.append('description', this.createOfferForm.get('createOfferDescription')?.value);
    form.append('pricePerPerson', this.createOfferForm.get('createOfferPrice')?.value);
    form.append('totalSeats', this.createOfferForm.get('createOfferSeats')?.value);
    form.append('flightDate', this.createOfferForm.get('flightDateTime')?.value);
    form.append('duration', this.createOfferForm.get('createOfferDuration')?.value);
    form.append('aircraftType', this.createOfferForm.get('aircraftTypeOption')?.value);
    form.append('address', this.createOfferForm.get('flightAddress')?.value);
    form.append('voivodeship', this.createOfferForm.get('voivodeshipOption')?.value);
    form.append('image', this.selectedFile, this.selectedFile!.name);
    
    
    form.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
    this.offerService.createOffer(form).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/account']);
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/error'], {
          queryParams: {message: "Error while creating offer"}
        })
      }
    })
  }

  onFileSelected(event: any): void {
    event.preventDefault();
    this.selectedFile = event.target.files[0] ?? null;
  }
}
