import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';
import { ListSubmitButtonComponent } from '../list-submit-button/list-submit-button.component';
import { NgIf } from '@angular/common';
import { OfferService } from '../../services/offer/offer.service';
import { AddComment } from '../../models/comment/addComment.interface';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputTextComponent, ListSubmitButtonComponent,NgIf],
  templateUrl: './comment-container.component.html',
  styleUrl: './comment-container.component.css'
})
export class CommentContainerComponent {
  
  commentForm: FormGroup;
  @Input() canComment: boolean = false;
  @Input() flightId?: number;

  constructor(private fb: FormBuilder, private offerService: OfferService, private router: Router) {
    this.commentForm = this.fb.group({
      content: [''],
      rating: ['']
    });
  }
  onCommentSubmit() {
    const newCommentDto: AddComment =  {
      flightId: this.flightId!,
      content: this.commentForm.value['content'],
      rating: this.commentForm.value['rating'],
    }
    console.log(this.commentForm.value)
    this.offerService.addComment(newCommentDto).subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
        this.router.navigate(['/error']);
      }
    });
    // this.commentForm.reset();
  }

}
