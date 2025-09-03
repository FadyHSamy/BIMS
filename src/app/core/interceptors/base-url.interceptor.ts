import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://localhost:44364';

  // Only prepend if the request URL is relative (doesn’t start with http)
  const updatedUrl = req.url.startsWith('http') ? req.url : `${baseUrl}${req.url}`;

  const newReq = req.clone({
    url: updatedUrl,
  });

  return next(newReq);
};
