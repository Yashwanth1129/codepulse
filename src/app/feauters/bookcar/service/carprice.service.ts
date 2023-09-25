import { Injectable } from '@angular/core';
import { CarBook } from '../model/carbook.model';
import { CarBookResponse } from '../model/carbookresponse.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarpriceService {

  constructor(private http: HttpClient) { }

  carprice(request: CarBook): Observable<CarBookResponse>{
    return this.http.post<CarBookResponse>('https://localhost:7147/api/CarBooking', {
      pickupdate: request.pickupdate,
      returndate: request.returndate,
      fullname: request.fullname,
      email: request.email
    });
  }
}
