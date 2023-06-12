import { TestBed } from '@angular/core/testing';

import { JsonDateInterceptorService } from './json-date-interceptor.service';

describe('JsonDateInterceptorService', () => {
  let service: JsonDateInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDateInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
