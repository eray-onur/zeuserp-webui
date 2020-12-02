import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryDetailsDto } from '../models/complex-types/category-details.dto';
import { CategoryListDto } from '../models/complex-types/category-list.dto';
import { endpoints } from '../utils/keywords/endpoints.util';

@Injectable({providedIn: 'root'})
export class CategoryService {

    constructor(private http: HttpClient) {

    }

    getCategoryListDto(): Observable<Array<CategoryListDto>> {
        console.log('list');
        return this.http.get<Array<CategoryListDto>>(`${endpoints.rootEndpoint}/${endpoints.categoryEndpoints.getAll}`);
    }

    getCategoryDetailsDto(id: number): Observable<CategoryDetailsDto> {
        return this.http.get<CategoryDetailsDto>(`${endpoints.rootEndpoint}/${endpoints.categoryEndpoints.get}/${id}`);
    }

    getById(id: number): Observable<Category> {
        return this.http.get<Category>(`${endpoints.rootEndpoint}/${endpoints.categoryEndpoints.get}/${id}`);
    }

    getAll(): Observable<Array<Category>> {
        return this.http.get<Array<Category>>(`${endpoints.rootEndpoint}/${endpoints.categoryEndpoints.getAll}`);
    }

    add(category: Category): Observable<any> {
        console.log("About to add a category.");
        return this.http.post<Category>(`${endpoints.rootEndpoint}/${endpoints.categoryEndpoints.add}`, category);
    }

    update(category: Category) {

    }

    remove(category: Category) {

    }

}