import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../inventory/inventory.endpoints';
import { DeliveryDetailsDto } from '../models/complex-types/delivery-details.dto';
import { DeliveryListDto } from '../models/complex-types/delivery-list.dto';
import { OrderDelivery } from '../models/order-delivery.model';

@Injectable({providedIn: 'root'})
export class DeliveryOrdersService {
    constructor(private http: HttpClient) {

    }

    getDeliveryById(id: number): Observable<OrderDelivery> {
        return this.http
        .get<OrderDelivery>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getAsync}/${id}`);
    }

    getDeliveries(): Observable<Array<OrderDelivery>> {
        return this.http
        .get<Array<OrderDelivery>>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getAllAsync}`);
    }

    getDeliveryDetails(): Observable<DeliveryDetailsDto> {
        return this.http
        .get<DeliveryDetailsDto>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getReplenishmentOrdersDetailsDtoAsync}`);
    }

    getDeliveryList(): Observable<Array<DeliveryListDto>> {
        return this.http
        .get<Array<DeliveryListDto>>(`${endpoints.root}/${endpoints.replenishmentEndpoints.getReplenishmentOrdersListDtoAsync}`);
    }

    addDelivery(order: OrderDelivery): void {}

    update(order: OrderDelivery): void {}

    delete(id: number): void {}
}