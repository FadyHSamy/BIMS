import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GetCategories } from '../../../../shared/models/categories/get-categories.model';
import { CategoriesActions } from '../../state/categories.actions';
import {
  selectCategories,
  selectCategoriesError,
  selectCategoriesLoading,
} from '../../state/categories.selectors';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  standalone: false,
})
export class CategoriesListComponent implements OnInit {
  categories$!: Observable<ReadonlyArray<GetCategories>>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CategoriesActions.loadCategories());
    this.categories$ = this.store.select(selectCategories);
    this.loading$ = this.store.select(selectCategoriesLoading);
    this.error$ = this.store.select(selectCategoriesError);
  }
}
