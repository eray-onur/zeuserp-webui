
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';
import { Observable, throwError } from 'rxjs';
import { endpoints } from '../plm/plm.endpoints';
import { EngineeringChangeOrder } from '../models/engineering-change-order.model';

@Injectable({providedIn: 'root'})
export class EcoTagService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  getEcoById(id: number): Observable<EngineeringChangeOrder> {
    return this.http.get<EngineeringChangeOrder>(`${endpoints.root}/${endpoints.ecoTagEndpoints.getAsync}/${id}`);
  }

  getAllProducts(): Observable<Array<EngineeringChangeOrder>> {
    return this.http.get<Array<EngineeringChangeOrder>>(`${endpoints.root}/${endpoints.ecoTagEndpoints.getAllAsync}`);
  }

  add(eco: EngineeringChangeOrder): Observable<any> {
    console.log(eco);
    return this.http.post<Product>(`${endpoints.root}/${endpoints.ecoTagEndpoints.addAsync}`, eco, this.httpOptions);
  }

  update(eco: EngineeringChangeOrder): Observable<any> {
    return this.http.put<Product>(`${endpoints.root}/${endpoints.ecoTagEndpoints.updateAsync}/${eco.id}`, eco);
  }

  delete(id: number):  Observable<any> {
    return this.http.delete<Product>(`${endpoints.root}/${endpoints.ecoTagEndpoints.deleteAsync}/${id}`);
  }

  handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(err);
  }

}
