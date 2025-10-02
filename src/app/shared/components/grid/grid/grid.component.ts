import { Component, Input, OnInit } from '@angular/core';
import { GridHeaderComponent } from '../grid-header/grid-header.component';
import { GridRowComponent } from '../grid-row/grid-row.component';

export interface GridColumn {
  key: string;
  label: string;
  sortable?: boolean;
}
@Component({
  selector: 'app-grid',
  imports: [GridRowComponent, GridHeaderComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent<T> implements OnInit {
  @Input() columns!: GridColumn[];
  @Input() data: readonly T[] = [];

  ngOnInit() {}

  onSortChange() {}

  onRowAction() {}
}
