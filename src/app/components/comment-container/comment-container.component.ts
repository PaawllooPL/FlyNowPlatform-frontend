import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';
import { ListSubmitButtonComponent } from '../list-submit-button/list-submit-button.component';
import { NgIf } from '@angular/common';

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

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      content: [''],
      rating: ['']
    });
  }
  onCommentSubmit() {
    console.log(this.commentForm.value)
    this.commentForm.reset();
  }

}
