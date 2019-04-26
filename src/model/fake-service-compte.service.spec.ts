import { TestBed } from '@angular/core/testing';

import { FakeServiceCompteService } from './fake-service-compte.service';

describe('FakeServiceCompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeServiceCompteService = TestBed.get(FakeServiceCompteService);
    expect(service).toBeTruthy();
  });
});
