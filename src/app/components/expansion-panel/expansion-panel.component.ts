import { Component, Input, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'expansion-panel',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  step: number | null = null;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step) this.step++;
  }

  prevStep() {
    if (this.step) this.step--;
  }
}
