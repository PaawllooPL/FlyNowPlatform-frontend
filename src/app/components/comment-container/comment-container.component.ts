import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';
import { ListSubmitButtonComponent } from '../list-submit-button/list-submit-button.component';

@Component({
  selector: 'app-comment-container',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputTextComponent, ListSubmitButtonComponent],
  templateUrl: './comment-container.component.html',
  styleUrl: './comment-container.component.css'
})
export class CommentContainerComponent {
  
  commentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      commentFormInput: [''],
      commentRating: ['']
    });
  }
  onCommentSubmit() {
    console.log(this.commentForm.value)
    this.commentForm.reset();
  }

}
