import { Component } from '@angular/core';
import { OfferService } from '../../services/offer/offer.service';
import { OfferPreview } from '../../models/offer/offerPreview.interface';
import { environment } from '../../../environments/environment.development';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-offers',
  standalone: true,
  imports: [
    MatIcon,
    OfferTabComponent,
    OfferTabContainerComponent,
    CommonModule,
    MatProgressSpinner,
  ],
  templateUrl: './user-offers.component.html',
  styleUrl: './user-offers.component.css'
})
export class UserOffersComponent {
  offersLoaded: boolean = false;
  offersPreview?: OfferPreview[];

  constructor(private offerService: OfferService) { }

  fetchUserOffers(): void {
    this.offerService.getUserOffers().subscribe({
        next: (data) => {
            data.forEach(offer => {
                offer.imageFilename = environment.apiUrl.offerImageUrl(offer.imageFilename);
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
      this.fetchUserOffers();
  }

  generateDetailsUrl(flightId: number) {
    return environment.appUrl.generateOfferDetailsUrl(flightId);
}
}
