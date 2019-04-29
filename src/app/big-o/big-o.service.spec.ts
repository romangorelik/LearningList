import { TestBed } from '@angular/core/testing';

import { BigOService } from './big-o.service';

describe('BigOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigOService = TestBed.get(BigOService);
    expect(service).toBeTruthy();
  });
});
