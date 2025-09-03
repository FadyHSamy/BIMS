import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from '../../../core/services/categories.service';
import { CategoriesApiActions } from './categories.actions';

@Injectable()
export class CategoriesEffects {
  private actions$ = inject(Actions);
  private categoriesService = inject(CategoriesService);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesApiActions.loadCategories),
      mergeMap(() =>
        this.categoriesService.getCategories().pipe(
          map((categories) =>
            CategoriesApiActions.loadCategoriesSuccess({ categories: categories })
          ),
          catchError((error) =>
            of(
              CategoriesApiActions.loadCategoriesFailure({
                error: error?.message ?? 'Failed to load categories',
              })
            )
          )
        )
      )
    )
  );
}
