import { Component } from '@angular/core';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { ButtonsToggleComponent } from '../components/buttons-toggle/buttons-toggle.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { GridListComponent } from '../components/grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from '../components/cards/cards.component';
import { SliderComponent } from '../components/slider/slider.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    ButtonsComponent,
    ButtonsToggleComponent,
    ExpansionPanelComponent,
    GridListComponent,
    MatGridListModule,
    CardsComponent,
    SliderComponent,
    TabsComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  
}
