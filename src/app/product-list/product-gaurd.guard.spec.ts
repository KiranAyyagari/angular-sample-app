import { TestBed } from '@angular/core/testing';

import { ProductGaurdGuard } from './product-gaurd.guard';

describe('ProductGaurdGuard', () => {
  let guard: ProductGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
