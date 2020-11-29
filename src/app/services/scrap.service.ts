import { Injectable } from '@angular/core';
import { ScrapDetailsDto } from '../models/complex-types/scrap-details.dto';
import { Scrap } from '../models/scrap.model';

@Injectable({
    providedIn: 'root'
})
export class ScrapService {

    scrapOrders = Array<Scrap>();

    constructor() {
        const exampleScrap: Scrap = {
            id: 1,
            orderCode: 'EX-OR-0001',
            description: 'Example Scrap Order #1 Description',
            productId: 1,
            quantity: 255.000,
            scheduledDate: new Date("dd-mmm-yyyy"),
            completedDate: new Date("dd-mmm-yyyy"),
            sourceLocationId: 1,
            scrapLocationId: 1,
            scrapStatus: 0,
        };
        const exampleScrapTwo: Scrap = {
            id: 1,
            orderCode: 'EX-OR-0002',
            description: 'Example Scrap Order #2 Description',
            productId: 1,
            quantity: 115.000,
            scheduledDate: new Date("dd-mmm-yyyy"),
            completedDate: new Date("dd-mmm-yyyy"),
            sourceLocationId: 1,
            scrapLocationId: 1,
            scrapStatus: 1,
        };
        this.scrapOrders.push(exampleScrap, exampleScrapTwo);
    }

    getAll(): Array<Scrap> {
        return this.scrapOrders;
    }

    getById(scrapId: number): Scrap {
        return this.scrapOrders.find(s => s.id === scrapId);
    }

    getScrapDetailsById(scrapId: number): ScrapDetailsDto {
        return {
            ScrapId: scrapId,
            ProductId: 1,
            ProductName: "First Scrap Order",
            ScrappedQuantity: 500.000,
            ScrapOrderCode:  "SO_0001",
            ScrapOrderDescription: 'This is the description.',
            ScrapStatus: ScrapStatus.DRAFT,
            SourceLocationId :  1,
            SourceLocationName: 'Example Loc',
            ScrapLocationId: 1,
            ScrapLocationName: 'Example Scrap Loc',
            CompletedDate: new Date(),
            ScheduledDate: new Date(),
        };
    }

    add(scrapOrder: Scrap): void {
        this.scrapOrders.push(scrapOrder);
    }
}

enum ScrapStatus {
    DRAFT = 0,
    DONE = 1,
}