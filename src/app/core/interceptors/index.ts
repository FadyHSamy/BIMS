import { HttpInterceptorFn } from '@angular/common/http';
import { apiResponseInterceptor } from './api-response.interceptor';
import { baseUrlInterceptor } from './base-url.interceptor';

export const appInterceptors: HttpInterceptorFn[] = [baseUrlInterceptor, apiResponseInterceptor];
