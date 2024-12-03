import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OrganizerOfferTabComponent } from '../../components/organizer-offer-tab/organizer-offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { OrganizerOfferPreview } from '../../models/offer/organizerOfferPreview.interface';
import { OfferService } from '../../services/offer/offer.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-organizer-offers',
  standalone: true,
  imports: [
    MatIcon,
    OrganizerOfferTabComponent,
    OfferTabContainerComponent,
    CommonModule,
    MatProgressSpinner,
  ],
  templateUrl: './organizer-offers.component.html',
  styleUrl: './organizer-offers.component.css'
})
export class OrganizerOffersComponent {
  offersLoaded: boolean = false;
  organizerOffersPreview?: OrganizerOfferPreview[];

  constructor(private offerService: OfferService) { }
  
  fetchOrganizerOffers(): void {
    this.offerService.getOrganizerOffers().subscribe({
        next: (data) => {
            data.forEach(offer => {
                offer.imageFilename = environment.apiUrl.offerImageUrl(offer.imageFilename);
            })
            console.log("wczytano")
            this.organizerOffersPreview = data;
            this.offersLoaded = true;
        },
        error: (error) => {
            console.log("nie wczytano")
            console.error('Error fetching all offers', error);
            this.offersLoaded = false;
        }
    })
  }

  ngOnInit() {
    this.fetchOrganizerOffers();
  }

  generateOrganizerDetailsUrl(flightId: number) {
    return environment.appUrl.generateOrganizerOfferDetailsUrl(flightId);
  }
}
