import { TestBed } from '@angular/core/testing';

import { ObservedataService } from './observedata.service';

describe('ObservedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservedataService = TestBed.get(ObservedataService);
    expect(service).toBeTruthy();
  });
});
