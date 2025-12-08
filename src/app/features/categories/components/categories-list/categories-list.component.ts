import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CommonModule } from '@angular/common';
import { CardContentComponent } from 'src/app/shared/components/card/card-content/card-content.component';
import { GridHeaderComponent } from 'src/app/shared/components/grid/grid-header/grid-header.component';
import { GridRowComponent } from 'src/app/shared/components/grid/grid-row/grid-row.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import {
  GridColumn,
  GridComponent,
} from '../../../../shared/components/grid/grid/grid.component';
import { CategoriesActions } from '../../state/categories.actions';
import { selectCategories } from '../../state/categories.selectors';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    GridComponent,
    CardComponent,
    CardContentComponent,
    GridHeaderComponent,
    GridRowComponent,
  ],
})
export class CategoriesListComponent implements OnInit {
  store = inject(Store);
  categories$ = this.store.select(selectCategories);

  ngOnInit(): void {
    this.store.dispatch(CategoriesActions.getCategories());
  }
  columns: GridColumn[] = [
    { key: 'categoryId', label: '#', sortable: false },
    { key: 'categoryName', label: 'Name', sortable: true },
    { key: 'categoryDesc', label: 'Category', sortable: false },
    { key: 'createdAt', label: 'Created At', sortable: true },
  ];

  onGridSort(columnKey: string) {
    console.log('Sort by:', columnKey);
  }

  onGridAction(event: { action: string; row: any }) {
    console.log('Action:', event.action, 'Row:', event.row);
  }
}
