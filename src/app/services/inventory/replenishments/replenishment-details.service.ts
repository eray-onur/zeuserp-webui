import { Injectable } from '@angular/core';
import { ReplenishmentDetailsDto } from 'src/app/models/complex-types/replenishment-details.dto';

@Injectable({providedIn: 'root'})
export class ReplenishmentDetailsService {

    replenishmentDetails: Array<ReplenishmentDetailsDto>;

    getAll(): Array<ReplenishmentDetailsDto> {
        const replenishmentDetailsDtoOne: ReplenishmentDetailsDto = {
            id: 1,
            onHandQuantity: 50.000,
            orderedQuantity: 20.000,
            replenishmentStatusId: 0,
        }

        return [replenishmentDetailsDtoOne];
    }

    getById(id: number): ReplenishmentDetailsDto {
        const replenishmentDetailsDtoOne: ReplenishmentDetailsDto = {
            id: id,
            onHandQuantity: 50.000,
            orderedQuantity: 20.000,
            replenishmentStatusId: 0,
        }
        return replenishmentDetailsDtoOne;
    }


}