import { Component } from '@angular/core';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { CommonModule, NgFor } from '@angular/common';
import { OrganizerOfferDetails } from '../../models/offer/organizerOfferDetails.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../services/offer/offer.service';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from '../../../environments/environment.development';
import { Voivodeships } from '../../models/voivodeships.enum';

@Component({
  selector: 'app-organizer-offer-details',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
  ],
  templateUrl: './organizer-offer-details.component.html',
  styleUrl: './organizer-offer-details.component.css'
})
export class OrganizerOfferDetailsComponent {
  offerDetails?: OrganizerOfferDetails;
  isOfferLoaded: boolean = false;
  imageUrl: string = "";
  
  constructor(private route: ActivatedRoute, private offerService: OfferService, private router: Router, public authService: AuthService) { }
  
  ngOnInit() {
    this.loadOfferDetails();
  }
// todo: pack into service, offer-details has same rounding utility code
  roundOrganizerRating(value?: number): number | null {
    if(!value || value == null)
      return null;
    console.log(value)
    let fraction = value - Math.floor(value);
    let result = Math.floor(value);
    if(fraction >= 0.75)
      return result+1;
    else if(fraction >= 0.25)
      return result+0.5;
    else return result;
  }
  loadOfferDetails() {
    this.route.params.subscribe(params => {
      let offerId = params['id'];
      this.offerService.getOrganizerOfferDetailsById(offerId).subscribe({
        next: (offer) => {
          this.offerDetails = offer;
          this.offerDetails.voivodeship = Voivodeships[offer.voivodeship as keyof typeof Voivodeships];
          this.isOfferLoaded = true;
          this.imageUrl = environment.apiUrl.offerImageUrl(offer.imageFilename);
          
        },
        error: (error) => {
          console.error(error);
          this.router.navigate(['/error']);
        }
      });
    });
  }
  ngAfterViewChecked() {
    // Apply description container height to comments container
    let commentsContainer = document.getElementById('comments-container');
      let descriptionContainer = document.getElementById('description-container');
      if(commentsContainer && descriptionContainer) {
        let descriptionContainerHeight = descriptionContainer.clientHeight.toString() + 'px';
        commentsContainer.style.height = descriptionContainerHeight;
      }
  }
}
