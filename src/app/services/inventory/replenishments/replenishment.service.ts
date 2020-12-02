import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReplenishmentDetailsDto } from 'src/app/models/complex-types/replenishment-details.dto';
import { ReplenishmentListDto } from 'src/app/models/complex-types/replenishment-list.dto';
import { OrderReplenishment } from 'src/app/models/order-replenishment.model';
import { endpoints } from 'src/app/utils/keywords/endpoints.util';

@Injectable({providedIn: 'root'})
export class ReplenishmentService {

    
    constructor(private http: HttpClient) {
        
    }

    getReplenishmentList(): Observable<Array<ReplenishmentListDto>> {
        return this.http.get<Array<ReplenishmentListDto>>(`${endpoints.rootEndpoint}${endpoints}`);
    }

    getReplenishmentDetailsById(id: number): Observable<ReplenishmentDetailsDto> {
        return this.http.get<ReplenishmentDetailsDto>(`${endpoints.rootEndpoint}${endpoints}/${id}`);
    }

    getAll(): Array<OrderReplenishment> {
        const replenishmentOne: OrderReplenishment = {
            id: 1,
            productId: 1,
            locationId: 1,
            onHandQuantity: 50.000,
            orderQuantity: 20.000,
            replenishmentStatusId: 0,
        }

        return [replenishmentOne];
    }

    getById(id: number): OrderReplenishment {
        const replenishment: OrderReplenishment = {
            id: id,
            productId: 1,
            locationId: 1,
            onHandQuantity: 50.000,
            orderQuantity: 20.000,
            replenishmentStatusId: 0,
        }
        return replenishment;
    }

    add(replenishment: OrderReplenishment) {
        console.log("[ReplenishmentService / Add] New Replenishment")
        //this.replenishmentDetails.push(replenishment);
    }


}