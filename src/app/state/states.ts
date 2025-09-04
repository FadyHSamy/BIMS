import { LayoutState } from '../core/layout/state/layout.models';
import { CategoriesState } from '../features/categories/state/categories.reducer';
import { ErrorsState } from '../features/errors/models/errors-state.model';
import { SettingsState } from '../features/settings/state/settings.reducer';

export interface appState {
  categories: CategoriesState;
  settings: SettingsState;
  errors: ErrorsState;
  layout: LayoutState;
}
