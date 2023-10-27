import { TestBed } from '@angular/core/testing';

import { DetNameServiceService } from './det-name-service.service';

describe('DetNameServiceService', () => {
  let service: DetNameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetNameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
