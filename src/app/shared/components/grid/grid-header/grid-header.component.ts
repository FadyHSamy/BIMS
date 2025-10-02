import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridColumn } from '../grid/grid.component';

@Component({
  selector: 'app-grid-header',
  imports: [],
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.scss',
})
export class GridHeaderComponent {
  @Input() columns!: GridColumn[];
  @Output() sortChange = new EventEmitter<keyof GridColumn>();

  changeSort() {

  }
}
