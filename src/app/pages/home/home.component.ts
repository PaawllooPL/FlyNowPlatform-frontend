import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';
import { OfferTabContainerComponent } from '../../components/offer-tab-container/offer-tab-container.component';
import { OfferPreview } from '../../models/offer/offerPreview';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, OfferTabComponent, OfferTabContainerComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  offers: OfferPreview[] = [
    {
        title: 'Przelot awionetką nad jeziorem',
        pricePerPerson: 299,
        remainingSeats: 8,
        offerId: 1, // Unikalny identyfikator oferty
    },
    {
        title: 'Widok z balonu nad miastem',
        pricePerPerson: 399,
        remainingSeats: 4,
        offerId: 2,
    },
    {
        title: 'Lot szybowcem nad górami',
        pricePerPerson: 450,
        remainingSeats: 6,
        offerId: 3,
    },
    {
        title: 'Przelot helikopterem nad wybrzeżem',
        pricePerPerson: 600,
        remainingSeats: 3,
        offerId: 4,
    },
    {
        title: 'Lot samolotem Cessna wzdłuż rzeki',
        pricePerPerson: 350,
        remainingSeats: 10,
        offerId: 5,
    },
    {
        title: 'Podniebna przygoda w balonie',
        pricePerPerson: 500,
        remainingSeats: 2,
        offerId: 6,
    },
    {
        title: 'Widokowy lot nad wulkanem',
        pricePerPerson: 700,
        remainingSeats: 1,
        offerId: 7,
    },
];

}
