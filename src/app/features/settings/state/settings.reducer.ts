import { createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  loading: boolean;
  loaderCount: number;
  serviceUrl: string;
}

export const initialSettingsState: SettingsState = {
  loading: false,
  loaderCount: 0,
  serviceUrl: 'https://localhost:44364', // Default URL, can be changed via settings
};

export const settingsReducer = createReducer(
  initialSettingsState,

  on(SettingsActions.startLoading, (state) => ({
    ...state,
    loading: true,
    loaderCount: state.loaderCount + 1,
  })),

  on(SettingsActions.stopLoading, (state) => ({
    ...state,
    loaderCount: Math.max(state.loaderCount - 1, 0),
    loading: state.loaderCount > 1, // stays true until all loaders finished
  })),

  on(SettingsActions.resetLoader, () => ({
    ...initialSettingsState,
  })),

  on(SettingsActions.toggleLoading, (state) => ({
    ...state,
    loading: !state.loading,
  }))
);
