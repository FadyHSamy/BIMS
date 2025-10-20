import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from "../../icon/icon.component";
import { GridHeaderComponent } from '../grid-header/grid-header.component';
import { GridRowComponent } from '../grid-row/grid-row.component';

export interface GridColumn {
  key: string;
  label: string;
  sortable?: boolean;
}
@Component({
  selector: 'app-grid',
  imports: [GridRowComponent, GridHeaderComponent, IconComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent<T> implements OnInit {
  @Input() columns!: GridColumn[];
  @Input() data: readonly T[] = [];
  @Input() isSearchable:boolean = true;

  ngOnInit() {}

  onSortChange() {}

  onRowAction() {
    console.log("Row Clicked")
  }
}
