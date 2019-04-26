import { TestBed } from '@angular/core/testing';

import { SimDaoService } from './sim-dao.service';

describe('SimDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimDaoService = TestBed.get(SimDaoService);
    expect(service).toBeTruthy();
  });
});
