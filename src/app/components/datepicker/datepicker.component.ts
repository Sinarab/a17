import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Themes } from '../types';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  @Input() theme: Themes = 'light';

}
