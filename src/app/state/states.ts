import { ActionReducerMap } from '@ngrx/store';
import { LayoutState } from '../core/layout/state/layout.models';
import { layoutReducer } from '../core/layout/state/layout.reducer';
import { CategoriesEffects } from '../features/categories/state/categories.effects';
import { categoriesReducer, CategoriesState } from '../features/categories/state/categories.reducer';
import { ErrorsState } from '../features/errors/models/errors-state.model';
import { errorReducer } from '../features/errors/state/errors.reducer';
import { settingsReducer, SettingsState } from '../features/settings/state/settings.reducer';

export interface appState {
  categories: CategoriesState;
  settings: SettingsState;
  errors: ErrorsState;
  layout: LayoutState;
}

export const reducers: ActionReducerMap<appState> = {
  categories: categoriesReducer,
  settings: settingsReducer,
  errors: errorReducer,
  layout: layoutReducer,
};

export const effects = [CategoriesEffects];
