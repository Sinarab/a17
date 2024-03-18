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
import { CheckboxesComponent } from '../components/checkboxes/checkboxes.component';
import { ChipsComponent } from '../components/chips/chips.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { ShowcaseComponents } from '../shared/constants';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    // components
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonsComponent,
    ButtonsToggleComponent,
    CardsComponent,
    CheckboxesComponent,
    ChipsComponent,
    ExpansionPanelComponent,
    GridListComponent,
    SliderComponent,
    StepperComponent,
    TabsComponent,
    ToolbarComponent,
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  componentsList = ShowcaseComponents;
}
