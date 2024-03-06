import { Component } from '@angular/core';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { ButtonsToggleComponent } from '../components/buttons-toggle/buttons-toggle.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { GridListComponent } from '../components/grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from '../components/cards/cards.component';
import { SliderComponent } from '../components/slider/slider.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { StepperComponent } from '../components/stepper/stepper.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { BottomSheetComponent } from '../components/bottom-sheet/bottom-sheet.component';

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
    TabsComponent,
    AutocompleteComponent,
    StepperComponent,
    BadgeComponent,
    BottomSheetComponent
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  
}
