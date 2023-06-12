import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonDateInterceptorService implements HttpInterceptor {
  private _isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?Z$/;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((val: HttpEvent<any>) => {
        if (val instanceof HttpResponse) {
          const body = val.body;
          this.convert(body);
        }
        return val;
      })
    );
  }
  convert(body: any) {
    if (body === null || body === undefined) {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (typeof value === 'string') {
        return this._isoDateFormat.test(value);
      }
    }
  }
}
