import { TestBed } from '@angular/core/testing';

import { CurrentWeatherServiceService } from './current-weather-service.service';

describe('CurrentWeatherServiceService', () => {
  let service: CurrentWeatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWeatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
