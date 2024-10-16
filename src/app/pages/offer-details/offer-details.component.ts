import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../../services/offer/offer.service';
import { OfferDetails } from '../../models/offer/offerDetails.interface';
import { ListButtonContainerComponent } from '../../components/list-button-container/list-button-container.component';
import { ListButtonComponent } from '../../components/list-button/list-button.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { CommentContainerComponent } from '../../components/comment-container/comment-container.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [ListButtonContainerComponent, ListButtonComponent, CommentComponent, CommentContainerComponent, NgFor],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.css'
})
export class OfferDetailsComponent {
  offerDetails?: OfferDetails;
  isOfferLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private offerService: OfferService) { }

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
          this.isOfferLoaded = true;
        },
        error: (error) => {
          console.error(error);
        }
      });
    });
  }
}
