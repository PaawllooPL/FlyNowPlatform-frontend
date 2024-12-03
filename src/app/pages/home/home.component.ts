import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { OfferService } from '../../services/offer/offer.service';
import { CommonModule } from '@angular/common';
import { OfferPreview } from '../../models/offer/offerPreview.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { environment } from '../../../environments/environment.development';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatIcon, OfferTabComponent, OfferTabContainerComponent, CommonModule, MatProgressSpinner],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    offersLoaded: boolean = false;
    offersPreview?: OfferPreview[];

    constructor(private offerService: OfferService) { }

    fetchAllOffers(): void {
        this.offerService.getAllOffers().subscribe({
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
        this.fetchAllOffers();
    }
    generateFlightDetailsLink(flightId: number) {
        return environment.appUrl.generateOfferDetailsUrl(flightId);
    }
}
