import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="light-theme not-found-container">
      <h3>Nothing here! Lets get back to show case?</h3>
      <button mat-flat-button [routerLink]="'/showcase'">Go back to Showcase</button>
    </div>
  `,
  styles: `
    .not-found-container {
      display: grid;
      place-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  `
})
export class PageNotFoundComponent {

}
