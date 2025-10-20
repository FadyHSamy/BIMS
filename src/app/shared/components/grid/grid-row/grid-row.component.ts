import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridColumn } from '../grid/grid.component';

@Component({
  selector: 'app-grid-row',
  imports: [],
  templateUrl: './grid-row.component.html',
  styleUrl: './grid-row.component.scss',
})
export class GridRowComponent implements OnInit {
  @Input() columns: GridColumn[] = [];
  @Input() data: any | undefined;
  @Output() actionClick = new EventEmitter<{ rowId: number; actionType: string }>();

  ngOnInit(): void {}

  onActionClick(actionType: string) {}
}
