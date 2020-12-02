
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetailsDto } from '../models/complex-types/product-details.dto';
import { ProductListDto } from '../models/complex-types/product-list.dto';
import { BomType } from '../models/enums/bom-type.enum';
import { Product } from './../models/product.model';
import { endpoints } from './../utils/keywords/endpoints.util';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { errorCodes } from '../utils/error-codes.util';
import { Observable, throwError } from 'rxjs';
@Injectable()
export class ProductService {

  products: Array<Product>;

  constructor(private http: HttpClient) {
    this.products = new Array<Product>();
   
  }

  getProductById(id: number) : Observable<Product> {
    return this.http.get<Product>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.get}/${id}`);
  }

  getAllProducts() : Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.getList}`);
  }

  getProductDetailsDto(id: number) : Observable<ProductDetailsDto> {
    return this.http.get<ProductDetailsDto>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.getProductDetailsDto}/${id}`);
  }


  getProductListDto(): Observable<Array<ProductListDto>> {
    return this.http.get<Array<ProductListDto>>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.getProductListDto}`);
  }

  add(product: Product): Observable<any> {
    return this.http.post<Product>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.add}`, product);
  }

  update(product: Product): void {
    this.http.put<Product>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.update}`, product);
  }

  remove(product: Product): void {
    this.http.delete<Product>(`${endpoints.rootEndpoint}/${endpoints.productEndpoints.delete}/${product.id}`);
  }

  handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(err);
  } 

}
