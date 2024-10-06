import { Component, Input } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-button',
  standalone: true,
  imports: [MatIcon, RouterLink, MatFabButton],
  templateUrl: './list-button.component.html',
  styleUrl: './list-button.component.css'
})
export class ListButtonComponent {
  @Input() icon?: string;
  @Input() link?: string;
  @Input() text?: string;
}
