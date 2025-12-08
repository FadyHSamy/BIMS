import { Component, Input } from '@angular/core';
import { IonCol, IonRow } from '@ionic/angular/standalone';
import { GridColumn } from '../grid/grid.component';

@Component({
  selector: 'app-grid-header',
  imports: [IonCol, IonRow],
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.scss',
})
export class GridHeaderComponent {
  @Input() columns!: GridColumn[];

  changeSort() {}
}
