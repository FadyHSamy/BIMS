import { ActionReducerMap } from '@ngrx/store';
import { categoriesReducer } from '../features/categories/state/categories.reducer';
import { appState } from './states';

export const reducers: ActionReducerMap<appState> = {
  categories: categoriesReducer,
};
