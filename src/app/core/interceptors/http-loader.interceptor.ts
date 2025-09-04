import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs';
import { startLoading, stopLoading } from '../../features/settings/state/settings.actions';

export const httpLoaderInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  store.dispatch(startLoading());

  return next(req).pipe(
    finalize(() => {
      store.dispatch(stopLoading());
    })
  );
};
