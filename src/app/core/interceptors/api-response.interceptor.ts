import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, throwError } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

export const apiResponseInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  return next(req).pipe(
    map((event: any) => {
      if (event?.body && 'Success' in event.body && 'Data' in event.body) {
        const response = event.body as ApiResponse<unknown>;

        if (response.Success) {
          return event.clone({ body: response.Data });
        } else {
          throw { message: response.Message, code: 'API_ERROR' };
        }
      }

      // Not matching ApiResponse, return as-is
      return event;
    }),
    catchError((error) => {
      console.error('API Error:', error);
      return throwError(() => error);
    })
  );
};
