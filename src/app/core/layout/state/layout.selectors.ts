import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.models';
import { layoutFeatureKey } from './layout.reducer';

export const selectLayoutState = createFeatureSelector<LayoutState>(layoutFeatureKey);

export const selectIsSidebarOpen = createSelector(
  selectLayoutState,
  (state) => state.isSidebarOpen
);

export const selectTheme = createSelector(selectLayoutState, (state) => state.theme);

export const selectCurrentPath = createSelector(selectLayoutState, (state) => state.currentPath);


