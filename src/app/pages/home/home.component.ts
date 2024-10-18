import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { OfferService } from '../../services/offer/offer.service';
import { CommonModule } from '@angular/common';
import { OfferPreview } from '../../models/offer/offerPreview.interface';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatIcon, OfferTabComponent, OfferTabContainerComponent, CommonModule, MatProgressSpinner],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    offersLoaded: boolean = false;
    mockOffers?: OfferPreview[];

    constructor(private offerService: OfferService) { }

    fetchAllOffers(): void {
        this.offerService.getAllOffers().subscribe({
            next: (data) => {
                this.mockOffers = data;
                this.offersLoaded = true;
            },
            error: (error) => {
                console.error('Error fetching all offers', error);
                this.offersLoaded = false;
            }
        }
        )
    }
    ngOnInit() {
        this.fetchAllOffers();
    }
}
