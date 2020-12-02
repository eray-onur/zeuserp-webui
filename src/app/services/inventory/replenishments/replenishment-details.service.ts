import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplenishmentDetailsDto } from 'src/app/models/complex-types/replenishment-details.dto';
import { ReplenishmentListDto } from 'src/app/models/complex-types/replenishment-list.dto';
import { endpoints } from 'src/app/utils/keywords/endpoints.util';

@Injectable({providedIn: 'root'})
export class ReplenishmentDetailsService {

    constructor(private http: HttpClient) {

    }

    getReplenishmentList(): Observable<Array<ReplenishmentListDto>> {
        return this.http.get<Array<ReplenishmentListDto>>(`${endpoints.rootEndpoint}${endpoints}`);
    }



}