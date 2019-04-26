import { TestBed } from '@angular/core/testing';

import { MockclientService } from './mockclient.service';

describe('MockclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockclientService = TestBed.get(MockclientService);
    expect(service).toBeTruthy();
  });
});
