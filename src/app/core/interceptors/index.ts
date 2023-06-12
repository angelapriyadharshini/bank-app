import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
import { importProvidersFrom } from '@angular/core';

export const httpInterceptorProviders = [
  importProvidersFrom(HttpClientModule),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true,
  },
];
