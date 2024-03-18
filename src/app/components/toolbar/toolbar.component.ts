import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SHOWCASE_COMPONENTS_STATUS, ShowcaseComponents } from '../../shared/constants';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
    MatMenuModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  componentsList = SHOWCASE_COMPONENTS_STATUS;

  onNaviageToSection(section: ShowcaseComponents) {
    const foundSection = document.getElementById(section);
    if (foundSection) foundSection.scrollIntoView({ behavior: 'smooth' });
  }

  onNavigateBackToTop() {
    const componentsGridContainer = document.getElementById('components-grid');
    if (componentsGridContainer) componentsGridContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
