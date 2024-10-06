import { Component, Input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-list-submit-button',
  standalone: true,
  imports: [MatIcon, MatFabButton],
  templateUrl: './list-submit-button.component.html',
  styleUrl: './list-submit-button.component.css'
})
export class ListSubmitButtonComponent {
  @Input() icon?: string;
  @Input() text?: string;
}
