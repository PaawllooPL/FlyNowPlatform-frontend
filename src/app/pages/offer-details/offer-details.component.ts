import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../services/offer/offer.service';
import { OfferDetails } from '../../models/offer/offerDetails.interface';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { CommentContainerComponent } from '../../components/comment-container/comment-container.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../../services/auth/auth.service';
import { Permission } from '../../models/permissions/permissions.enum';
import { Voivodeships } from '../../models/voivodeships.enum';
@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [ListButtonContainerComponent, ListButtonComponent, CommentComponent, CommentContainerComponent, NgFor
    ,NgIf,
    CommonModule,
  ],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.css'
})
export class OfferDetailsComponent {
  offerDetails?: OfferDetails;
  isOfferLoaded: boolean = false;
  isLoggedIn: boolean = this.authService.hasPermission(Permission.BuyOffer)
  imageUrl: string = "";
  Permission = Permission;
  constructor(private route: ActivatedRoute, private offerService: OfferService, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loadOfferDetails();
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

  loadOfferDetails() {
    this.route.params.subscribe(params => {
      let offerId = params['id'];
      this.offerService.getOfferDetailsById(offerId).subscribe({
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

  onBuy() {
    this.offerService.buyOffer(this.offerDetails?.flightId!).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
