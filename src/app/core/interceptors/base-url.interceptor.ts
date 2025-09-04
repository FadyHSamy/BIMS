import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, take } from 'rxjs';
import { selectServiceUrl } from '../../features/settings/state/settings.selectors';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  return store.select(selectServiceUrl).pipe(
    take(1), // take the latest serviceUrl once
    exhaustMap((serviceUrl) => {
      const updatedUrl = req.url.startsWith('http') ? req.url : `${serviceUrl}${req.url}`;

      const newReq = req.clone({ url: updatedUrl });

      return next(newReq);
    })
  );
};
