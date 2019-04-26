import { TestBed } from '@angular/core/testing';

import { FakeServiceConseillerService } from './fake-service-conseiller.service';

describe('FakeServiceConseillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeServiceConseillerService = TestBed.get(FakeServiceConseillerService);
    expect(service).toBeTruthy();
  });
});
