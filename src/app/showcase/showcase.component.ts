import { Component } from '@angular/core';
import { ButtonsComponent } from '../components/buttons/buttons.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [ButtonsComponent],
  template: `
    <div class="light-theme showcase-container">
      <div class="inline">
        <buttons></buttons>
        <buttons [theme]="'dark'"></buttons>
      </div>
    </div>
  `,
  styles: `
    .showcase-container {
      display: grid;
      position: absolute;
      justify-content: center;
      align-items: start;
      padding: 2rem;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .inline {
      display: flex;
      gap: 1rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `
})
export class ShowcaseComponent {

}
