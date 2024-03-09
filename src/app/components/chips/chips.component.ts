import { Component, Input, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Themes } from '../types';

@Component({
  selector: 'chips',
  standalone: true,
  imports: [
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input() theme: Themes = 'light';

  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(this.keywords);

  announcer = inject(LiveAnnouncer);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
