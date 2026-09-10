import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListButtonComponent } from '../list-button/list-button.component';
import { MatFabButton } from '@angular/material/button';
import { ListButtonContainerComponent } from '../list-button-container/list-button-container.component';
import { environment } from '../../../environments/environment';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-offer-tab',
  standalone: true,
  imports: [MatIcon, ListButtonComponent, MatFabButton, ListButtonContainerComponent, ListButtonComponent, CommonModule],
  providers: [DatePipe],
  templateUrl: './offer-tab.component.html',
  styleUrl: './offer-tab.component.css'
})
export class OfferTabComponent {

  @Input() title?: string;
  @Input() pricePerPerson?: number;
  @Input() aircraftType?: string;
  @Input() imagePath?: string;
  @Input() flightId!: number;
  @Input() address?: string;
  @Input() voivodeship?: string;
  @Input() flightDate?: Date;
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
}
