import { TestBed } from '@angular/core/testing';

import { UrlBreakService } from './url-break.service';

describe('UrlBreakService', () => {
  let service: UrlBreakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlBreakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
