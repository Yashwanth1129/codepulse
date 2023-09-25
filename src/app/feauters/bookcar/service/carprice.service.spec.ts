import { TestBed } from '@angular/core/testing';

import { CarpriceService } from './carprice.service';

describe('CarpriceService', () => {
  let service: CarpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
