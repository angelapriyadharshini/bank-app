import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { importProvidersFrom } from '@angular/core';

export const httpInterceptorProviders = [
  importProvidersFrom(HttpClientModule),
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
