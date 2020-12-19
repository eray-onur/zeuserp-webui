import { OrderReplenishment } from '../models/order-replenishment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '../inventory/inventory.endpoints';
import { ReplenishmentListDto } from '../models/complex-types/replenishment-list.dto';
import { ReplenishmentDetailsDto } from '../models/complex-types/replenishment-details.dto';
@Injectable({
  providedIn: 'root'
})
export class OrderReplenishmentService {

    constructor(private http: HttpClient) {

    }

    getReplenishmentById(id: number): Observable<OrderReplenishment> {
        return this.http
        .get<OrderReplenishment>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getAsync}/${id}`);
    }

    getReplenishments(): Observable<Array<OrderReplenishment>> {
        return this.http
        .get<Array<OrderReplenishment>>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getAllAsync}`);
    }

    getReplenishmentDetails(id: number): Observable<ReplenishmentDetailsDto> {
        return this.http
        .get<ReplenishmentDetailsDto>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getReplenishmentOrdersDetailsDtoAsync}/${id}`);
    }

    getReplenishmentList(): Observable<Array<ReplenishmentListDto>> {
        return this.http
        .get<Array<ReplenishmentListDto>>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getReplenishmentOrdersListDtoAsync}`);
    }

    addReplenishment(order: OrderReplenishment): void {}

    update(order: OrderReplenishment): void {}

    delete(id: number): void {}
}
