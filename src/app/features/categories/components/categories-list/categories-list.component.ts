import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { getErrorMessage } from '../../../errors/state/errors.selectors';
import { selectLoading } from '../../../settings/state/settings.selectors';
import { GetCategories } from '../../models/get-categories.model';
import { CategoriesActions } from '../../state/categories.actions';
import { selectCategories } from '../../state/categories.selectors';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CategoriesListComponent implements OnInit {
  categories$!: Observable<ReadonlyArray<GetCategories>>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CategoriesActions.getCategories());
    this.categories$ = this.store.select(selectCategories);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(getErrorMessage);
  }
}
