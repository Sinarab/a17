import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'buttons-toggle',
  standalone: true,
  imports: [MatButtonToggleModule],
  template: `
    <section class="buttons-toggle-container light-theme light"
             [class.dark]="theme === 'dark'"
             [class.dark-theme]="theme === 'dark'">
      <p>
        <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
          <mat-button-toggle value="bold">Bold</mat-button-toggle>
          <mat-button-toggle value="italic">Italic</mat-button-toggle>
          <mat-button-toggle value="underline">Underline</mat-button-toggle>
        </mat-button-toggle-group>
      </p>
    </section>
  `,
  styles: `
    .buttons-toggle-container {
      width: fit-content;
      padding: 2rem;

      display: flex;
      gap: 0.875rem;
      flex-direction: column;

      box-shadow: 0 0.5rem 0.5rem 0.25rem rgba(221, 221, 221, 0.1);
      border-radius: 0.5rem;
      border: 0.125rem solid #a82192;
    }
  `
})
export class ButtonsToggleComponent {
  @Input() theme = 'light';
}
