import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListButtonComponent } from '../list-button/list-button.component';
import { MatFabButton } from '@angular/material/button';
import { ListButtonContainerComponent } from '../list-button-container/list-button-container.component';

@Component({
  selector: 'offer-tab',
  standalone: true,
  imports: [MatIcon, ListButtonComponent, MatFabButton, ListButtonContainerComponent, ListButtonComponent],
  templateUrl: './offer-tab.component.html',
  styleUrl: './offer-tab.component.css'
})
export class OfferTabComponent {
  @Input() title?: string;
  @Input() pricePerPerson?: number;
  @Input() remainingSeats?: number;
}
