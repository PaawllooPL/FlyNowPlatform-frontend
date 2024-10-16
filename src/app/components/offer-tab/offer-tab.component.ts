import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListButtonComponent } from '../list-button/list-button.component';
import { MatFabButton } from '@angular/material/button';
import { ListButtonContainerComponent } from '../list-button-container/list-button-container.component';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-offer-tab',
  standalone: true,
  imports: [MatIcon, ListButtonComponent, MatFabButton, ListButtonContainerComponent, ListButtonComponent],
  templateUrl: './offer-tab.component.html',
  styleUrl: './offer-tab.component.css'
})
export class OfferTabComponent {

  @Input() title?: string;
  @Input() pricePerPerson?: number;
  @Input() aircraftType?: string;
  @Input() imagePath?: string;
  @Input() offerId!: number;
  offerDetailLink!: string;
  
  ngOnInit() {
    this.offerDetailLink = "/offer" + "/" + this.offerId + "/details";
  }
}
