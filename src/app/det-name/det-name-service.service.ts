import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export interface ApiResult
{
  "count":number,
  "name":string,
  "age":number
}

@Injectable({
  providedIn: 'root'
})
export class DetNameServiceService {

  constructor(private http: HttpClient) { }

  getAgeDetermination(name: any): Observable<ApiResult>
  {
    return this.http.get<ApiResult>(`${environment.detAgeUrl}?name=${name}`);
  }
}
