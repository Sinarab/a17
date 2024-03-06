import { Component, Inject, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Themes } from '../types';

@Component({
  selector: 'bottom-sheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {
  @Input() theme: Themes = 'light';

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, { data: { theme: this.theme } });
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview.html',
  standalone: true,
  imports: [MatListModule],
  styleUrl: './bottom-sheet-overview.scss'
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { theme: Themes },
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) { }

  get theme(): Themes {
    return this.data.theme || 'light';
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
