import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export interface ApiResult 
{
  "name": string,
  "gender": string,
  "probability": number,
  "count": number
}

@Injectable({
  providedIn: 'root'
})
export class DetGenderServiceService {

  constructor(private http: HttpClient) {}

  getGenderDetermination(name: any): Observable<ApiResult>
  {
    return this.http.get<ApiResult>(`${environment.detGenderUrl}?name=${name}`);
  }

}
