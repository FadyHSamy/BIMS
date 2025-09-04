import { HttpInterceptorFn } from '@angular/common/http';
import { apiResponseInterceptor } from './api-response.interceptor';
import { baseUrlInterceptor } from './base-url.interceptor';
import { httpLoaderInterceptor } from './http-loader.interceptor';

export const appInterceptors: HttpInterceptorFn[] = [
  httpLoaderInterceptor,
  baseUrlInterceptor,
  apiResponseInterceptor,
];
