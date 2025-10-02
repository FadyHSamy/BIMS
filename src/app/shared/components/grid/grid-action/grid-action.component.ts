import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid-action',
  imports: [],
  templateUrl: './grid-action.component.html',
  styleUrl: './grid-action.component.scss'
})
export class GridActionComponent {
  @Input() rowId!: number;
  @Output() actionClick = new EventEmitter<string>();

  onAction(actionType: string) {
    this.actionClick.emit(actionType);
  }
}
