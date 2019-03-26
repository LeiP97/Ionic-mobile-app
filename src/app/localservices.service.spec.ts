import { TestBed } from '@angular/core/testing';

import { LocalservicesService } from './localservices.service';

describe('LocalservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalservicesService = TestBed.get(LocalservicesService);
    expect(service).toBeTruthy();
  });
});
