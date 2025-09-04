import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorsState } from '../models/errors-state.model';
import { errorsFeatureKey } from './errors.reducer';

// ✅ Feature selector
export const selectErrorsState = createFeatureSelector<ErrorsState>(errorsFeatureKey);

export const getHasError = createSelector(
  selectErrorsState,
  (state: ErrorsState) => state.hasError
);

export const getErrorMessage = createSelector(
  selectErrorsState,
  (state: ErrorsState) => state.message
);

export const getErrorCode = createSelector(selectErrorsState, (state: ErrorsState) => state.code);

export const getErrorFeature = createSelector(
  selectErrorsState,
  (state: ErrorsState) => state.feature
);

export const getErrorDatetime = createSelector(
  selectErrorsState,
  (state: ErrorsState) => state.datetime
);

export const getErrorSeverity = createSelector(
  selectErrorsState,
  (state: ErrorsState) => state.severity
);

export const getError = createSelector(selectErrorsState, (state: ErrorsState) => ({
  hasError: state.hasError,
  message: state.message,
  code: state.code,
  feature: state.feature,
  datetime: state.datetime,
  severity: state.severity,
}));
