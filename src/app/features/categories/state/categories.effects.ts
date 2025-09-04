import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from '../../../core/services/categories.service';
import { ErrorsActions } from '../../errors/state/errors.actions';
import { CategoriesActions } from './categories.actions';

@Injectable()
export class CategoriesEffects {
  private actions$ = inject(Actions);
  private categoriesService = inject(CategoriesService);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.getCategories),
      mergeMap(() =>
        this.categoriesService.getCategories().pipe(
          map((categories) => CategoriesActions.getCategoriesSuccess({ categories: categories })),
          catchError((error) =>
            of(
              ErrorsActions.setError({
                error: {
                  message: error?.message ?? 'Failed to load categories',
                  feature: 'Categories',
                  severity: 'error',
                  code: error?.code ?? 'CATEGORIES_LOAD_FAILURE',
                },
              })
            )
          )
        )
      )
    )
  );
}
