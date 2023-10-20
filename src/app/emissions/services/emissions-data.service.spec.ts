import { TestBed } from '@angular/core/testing';

import { EmissionsDataService } from './emissions-data.service';

describe('EmissionsDataService', () => {
  let service: EmissionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmissionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
