import { TestBed } from '@angular/core/testing';

import { DetGenderServiceService } from './det-gender-service.service';

describe('DetGenderServiceService', () => {
  let service: DetGenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetGenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
