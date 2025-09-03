import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

export const apiResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((event: any) => {
      // Check if response has ApiResponse shape
      if (event?.body && 'Success' in event.body && 'Data' in event.body) {
        const response = event.body as ApiResponse<unknown>;

        if (response.Success) {
          // Replace body with only Data
          return event.clone({ body: response.Data });
        } else {
          throw new Error(response.Message || 'Unknown error');
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
