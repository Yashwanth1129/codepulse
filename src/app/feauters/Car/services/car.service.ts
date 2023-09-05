import { Injectable } from '@angular/core';
import { CarsRequest } from '../model/carsrequest.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsResponse } from '../model/carsresponse.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  car(request: CarsRequest): Observable<CarsResponse>{
    return this.http.post<CarsResponse>('https://localhost:7147/api/Cars', {
      discount: request.discount,
      version: request.version

    });

  }
}
