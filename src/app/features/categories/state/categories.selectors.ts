import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categoriesFeatureKey, CategoriesState } from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const selectCategories = createSelector(selectCategoriesState, (state) => state.categories);

