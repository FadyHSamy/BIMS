import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SetError } from '../models/set-error.model';

export const ErrorsActions = createActionGroup({
  source: 'Errors',
  events: {
    'Set Error': props<{ error: SetError }>(),
    'Clear Error': emptyProps(),
  },
});
