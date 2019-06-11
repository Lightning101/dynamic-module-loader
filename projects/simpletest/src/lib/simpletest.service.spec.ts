import { TestBed } from '@angular/core/testing';

import { SimpletestService } from './simpletest.service';

describe('SimpletestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpletestService = TestBed.get(SimpletestService);
    expect(service).toBeTruthy();
  });
});
