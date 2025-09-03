import { createReducer, on } from '@ngrx/store';
import { GetCategories } from '../models/categories/get-categories.model';
import { CategoriesApiActions } from './categories.actions';

export interface CategoriesState {
  categories: ReadonlyArray<GetCategories>;
  loading: boolean;
  error: string | null;
}

export const initialCategoriesState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesApiActions.loadCategories, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CategoriesApiActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),
  on(CategoriesApiActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
