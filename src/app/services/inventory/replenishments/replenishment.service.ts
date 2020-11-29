import { Injectable } from '@angular/core';
import { OrderReplenishment } from 'src/app/models/order-replenishment.model';

@Injectable({providedIn: 'root'})
export class ReplenishmentService {

    replenishmentDetails: Array<OrderReplenishment>;

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
        this.replenishmentDetails.push(replenishment);
    }


}