import { createReducer, on } from '@ngrx/store';
import { ErrorsState } from '../models/errors-state.model';
import { ErrorsActions } from './errors.actions';

export const errorsFeatureKey = 'errors';

export const initialErrorsState: ErrorsState = {
  hasError: false,
  message: null,
  code: undefined,
  feature: undefined,
  datetime: null,
  severity: null,
};

export const errorReducer = createReducer(
  initialErrorsState,
  on(ErrorsActions.setError, (state, { error }) => ({
    ...state,
    hasError: true,
    datetime: new Date().toString(),
    code: error.code,
    feature: error.feature,
    message: error.message,
    severity: error.severity || 'error',
  })),
  on(ErrorsActions.clearError, () => ({
    ...initialErrorsState,
  }))
);
