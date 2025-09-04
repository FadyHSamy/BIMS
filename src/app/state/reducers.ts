import { ActionReducerMap } from '@ngrx/store';
import { layoutReducer } from '../core/layout/state/layout.reducer';
import { categoriesReducer } from '../features/categories/state/categories.reducer';
import { errorReducer } from '../features/errors/state/errors.reducer';
import { settingsReducer } from '../features/settings/state/settings.reducer';
import { appState } from './states';

export const reducers: ActionReducerMap<appState> = {
  categories: categoriesReducer,
  settings: settingsReducer,
  errors: errorReducer,
  layout: layoutReducer
};
