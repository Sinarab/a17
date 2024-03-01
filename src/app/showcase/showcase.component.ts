import { Component } from '@angular/core';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { ButtonsToggleComponent } from '../components/buttons-toggle/buttons-toggle.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    ButtonsComponent,
    ButtonsToggleComponent,
    ExpansionPanelComponent
  ],
  template: `
    <div class="light-theme showcase-container">
      <div class="auto-grid">
        <buttons></buttons>
        <buttons [theme]="'dark'"></buttons>
        <div style="display: flex; flex-direction: column; gap: 1rem">
          <buttons-toggle></buttons-toggle>
          <buttons-toggle [theme]="'dark'"></buttons-toggle>
        </div>
        <expansion-panel></expansion-panel>
      </div>
    </div>
  `,
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {

}
