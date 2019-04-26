import { TestBed } from '@angular/core/testing';

import { FakeServiceClientService } from './fake-service-client.service';

describe('FakeServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeServiceClientService = TestBed.get(FakeServiceClientService);
    expect(service).toBeTruthy();
  });
});
