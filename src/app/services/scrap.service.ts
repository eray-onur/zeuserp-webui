import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrapDetailsDto } from '../models/complex-types/scrap-details.dto';
import { ScrapListDto } from '../models/complex-types/scrap-list.dto';
import { Scrap } from '../models/scrap.model';
import { endpoints } from '../utils/keywords/endpoints.util';

@Injectable({
    providedIn: 'root'
})
export class ScrapService {

    constructor(private http: HttpClient) {
        
    }


    getScrapDetailsById(scrapId: number): Observable<ScrapDetailsDto> {
        return this.http.get<ScrapDetailsDto>(`${endpoints.rootEndpoint}/${endpoints.scrapEndpoints.getProductListDto}/${scrapId}`);
    }

    getScrapList(): Observable<Array<ScrapListDto>> {
        return this.http.get<Array<ScrapListDto>>(`${endpoints.rootEndpoint}/${endpoints.scrapEndpoints.getProductListDto}`);
    }

    add(scrapOrder: Scrap): void {
        
    }

    update(scrapOrder: Scrap): void {
        
    }

    delete(scrapOrder: Scrap): void {

    }

}

enum ScrapStatus {
    DRAFT = 0,
    DONE = 1,
}