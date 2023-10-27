import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherServiceService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any>
  {
    const params= {key: environment.currentWeatherApiKey, city}
    return this.http.get<any>(environment.currentWeatherUrl, { params });
  }
}
