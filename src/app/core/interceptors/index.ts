import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
import { importProvidersFrom } from '@angular/core';
import { JsonDateInterceptorService } from './json-date-interceptor.service';

export const httpInterceptorProviders = [
  importProvidersFrom(HttpClientModule),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonDateInterceptorService,
    multi: true,
  },
];
