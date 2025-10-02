import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridColumn } from '../grid/grid.component';

@Component({
  selector: 'app-grid-row',
  imports: [],
  templateUrl: './grid-row.component.html',
  styleUrl: './grid-row.component.scss',
})
export class GridRowComponent<T extends Record<string, any>> implements OnInit {
  @Input() columns: GridColumn[] = [];
  @Input() data: T | undefined;
  @Output() actionClick = new EventEmitter<{ rowId: number; actionType: string }>();

  ngOnInit(): void {
    console.log(this.columns, this.data);
  }

  onActionClick(actionType: string) {}
}
