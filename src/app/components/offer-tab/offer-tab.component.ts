import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ListButtonComponent } from '../list-button/list-button.component';

@Component({
  selector: 'offer-tab',
  standalone: true,
  imports: [MatIcon, ListButtonComponent],
  templateUrl: './offer-tab.component.html',
  styleUrl: './offer-tab.component.css'
})
export class OfferTabComponent {

}
