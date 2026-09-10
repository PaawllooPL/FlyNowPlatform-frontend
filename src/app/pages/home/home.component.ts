import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { OfferService } from '../../services/offer/offer.service';
import { CommonModule, formatCurrency } from '@angular/common';
import { OfferPreview } from '../../models/offer/offerPreview.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment';
import { Voivodeships } from '../../models/voivodeships.enum';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ListButtonContainerComponent } from "../../components/list-button-container/list-button-container.component";
import { ListSubmitButtonComponent } from "../../components/list-submit-button/list-submit-button.component";
import { Router } from '@angular/router';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatIcon, OfferTabComponent, OfferTabContainerComponent, CommonModule, MatProgressSpinner, ListButtonContainerComponent, ListSubmitButtonComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    offersLoaded: boolean = false;
    offersPreview?: OfferPreview[];
    voivodeships = Object.entries(Voivodeships)//.map(v => v.toString());
    filterForm: FormGroup;

    constructor(private offerService: OfferService, private fb: FormBuilder, private router: Router) { 
        this.filterForm = this.fb.group({
            formVoivodeships: this.fb.array([])
        })
    }

    fetchAllOffers(): void {
        this.offerService.getAllOffers().subscribe({
            next: (data) => {
                data.forEach(offer => {
                    offer.imageFilename = environment.apiUrl.offerImageUrl(offer.imageFilename);
                    offer.voivodeship = Voivodeships[offer.voivodeship as keyof typeof Voivodeships];
                })
                console.log("wczytano")
                this.offersPreview = data;
                this.offersLoaded = true;
            },
            error: (error) => {
                console.log("nie wczytano")
                console.error('Error fetching all offers', error);
                this.offersLoaded = false;
            }
        }
        )
    }
    ngOnInit() {
        this.fetchAllOffers();
    }
    generateFlightDetailsLink(flightId: number) {
        return environment.appUrl.generateOfferDetailsUrl(flightId);
    }
    handleVoivodeshipCheckboxCheck(e: any) {
        let formArr = this.filterForm.get('formVoivodeships') as FormArray;
        if(e.target.checked) {
            formArr.push(new FormControl(e.target.value))
        }
        else {
            let i = 0;
            formArr.controls.forEach(
                (l:any) => {
                    if(l.value==e.target.value) {
                        formArr.removeAt(i);
                        return;
                    }
                    i++;
                }
            )
        }
    }
    onFilterFormSubmit() {
        this.offersLoaded = false;
        this.offersPreview = [];
        let filters: string[] = this.filterForm.get('formVoivodeships')?.value;
        console.log(filters)
        this.offerService.getFilteredOffers(filters).subscribe({
            next: (data) => {
                data.forEach(offer => {
                    offer.imageFilename = environment.apiUrl.offerImageUrl(offer.imageFilename);
                    offer.voivodeship = offer.voivodeship = Voivodeships[offer.voivodeship as keyof typeof Voivodeships];
                })
                console.log("wczytano")
                this.offersPreview = data;
                this.offersLoaded = true;
            },
            error: (error) => {
                console.error('Error fetching all offers', error);
                this.router.navigate(['/error'], {
                    queryParams: {message: "Failed to load offers."}
                  });
            }
        }
        )
    }
}
