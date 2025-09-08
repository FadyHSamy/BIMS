import { createReducer, on } from '@ngrx/store';
import { GetCategories } from '../models/get-categories.model';
import { CategoriesActions } from './categories.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: ReadonlyArray<GetCategories>;
}

export const initialCategoriesState: CategoriesState = {
  categories: [],
};

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.getCategories, () => ({
    ...initialCategoriesState,
  })),
  on(CategoriesActions.getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
  }))
);
