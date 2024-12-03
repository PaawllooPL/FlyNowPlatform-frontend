import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListButtonComponent } from '../list-button/list-button.component';
import { MatFabButton } from '@angular/material/button';
import { ListButtonContainerComponent } from '../list-button-container/list-button-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizer-offer-tab',
  standalone: true,
  imports: [
    MatIcon,
    ListButtonComponent,
    MatFabButton,
    ListButtonComponent,
    ListButtonContainerComponent,
    CommonModule,
  ],
  templateUrl: './organizer-offer-tab.component.html',
  styleUrl: './organizer-offer-tab.component.css'
})
export class OrganizerOfferTabComponent {

  @Input() title?: string;
  @Input() pricePerPerson?: number;
  @Input() clientCount?: number;
  @Input() totalSeats?: number;
  @Input() imagePath?: string;
  @Input() flightId!: number;
  @Input() address?: string;
  @Input() flightDate?: Date;
  @Input() buttonText?: string;
  @Input() buttonLink?: string;
}
