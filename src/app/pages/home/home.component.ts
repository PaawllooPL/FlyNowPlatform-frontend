import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OfferTabComponent } from '../../components/offer-tab/offer-tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, OfferTabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
