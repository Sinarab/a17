import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule, NgOptimizedImage],
  template: `
    <div class="light-theme app-container">
    <img 
      alt="Animation that starts with the original red shield Angular logo and then morphs into the new hexagonal logo with a purple-to-pink gradient and bolder letter A."
      width="400" height="194"
      loading="lazy" ngSrc="assets/angular-logo.svg">
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

        img {
          border-radius: 4px;
          margin-bottom: 1rem;
        }
    }
  `
})
export class LandingPageComponent {

}
