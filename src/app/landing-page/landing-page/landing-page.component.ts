import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="light-theme app-container">
      <button mat-flat-button [routerLink]="'/showcase'">Go to Showcase</button>
    </div>
  `,
  styles: `
      .app-container {
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
export class LandingPageComponent {

}
