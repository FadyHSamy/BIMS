import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState, settingsFeatureKey } from './settings.reducer';

export const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectLoading = createSelector(selectSettingsState, (state) => state.loading);

export const selectLoaderCount = createSelector(selectSettingsState, (state) => state.loaderCount);
