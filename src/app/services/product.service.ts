
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetailsDto } from '../models/complex-types/product-details.dto';
import { ProductListDto } from '../models/complex-types/product-list.dto';
import { BomType } from '../models/enums/bom-type.enum';
import { Product } from './../models/product.model';
import { endpoints } from './../utils/keywords/endpoints.util';
@Injectable()
export class ProductService {

  products: Array<Product>;

  constructor(private http: HttpClient) {
    this.products = new Array<Product>();
   
  }

  getAllProducts() : Array<Product> {
    this.http.get<Array<Product>>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getList}`)
    .subscribe(products => {
      console.table(products);
      return [];
    })
    return [];
  }

  async getAllProductsAsync() : Promise<Array<Product>> {
    await this.http.get<Array<Product>>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getList}`)
    .subscribe(products => {
      console.table(products);
      return products;
    })
    return [];
  }

  getProductDetailsDto(id: number) : ProductDetailsDto {
    this.http.get<ProductDetailsDto>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getProductDetailsDto}/${id}`)
    .subscribe(productDetailsDto => {
      console.table(productDetailsDto);
      return productDetailsDto;
    });
    return null;
  }

  async getProductDetailsDtoAsync(id: number) : Promise<ProductDetailsDto> {
    await this.http.get<ProductDetailsDto>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getProductDetailsDto}/${id}`)
    .subscribe(productDetailsDto => {
      console.table(productDetailsDto);
      return productDetailsDto;
    });
    return null;
  }

  getProductListDto(): ProductListDto {
    this.http.get<Array<ProductListDto>>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getProductListDto}`)
    .subscribe(productListDto => {
      console.table(productListDto);
      return productListDto;
    });
    return null;
  }

  async getProductListDtoAsync(): Promise<ProductListDto> {
    await this.http.get<Array<ProductListDto>>(`${endpoints.rootEndpoint + endpoints.productEndpoints.getProductListDtoAsync}`)
    .subscribe(productListDto => {
      console.table(productListDto);
      return productListDto;
    })
    return null;
  }

  getProductDtoById(id: number) {
    return null;
  }

  getProductById(id: number) : Product {
    return null;
  }

  add(product: Product) : void {
    
  }

}
