import { Injectable } from '@angular/core';
import { ScrapDetailsDto } from 'src/app/models/complex-types/scrap-details.dto';
import { Scrap } from 'src/app/models/scrap.model';

@Injectable({providedIn: 'root'})
export class ScrapDetailsService {

    scrapOrders = Array<ScrapDetailsDto>();

    constructor() {
        const exampleScrapDetail: ScrapDetailsDto = {
            ScrapId: 1,
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
        const exampleScrapDetailTwo: ScrapDetailsDto = {
            ScrapId: 1,
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
        this.scrapOrders.push(exampleScrapDetail, exampleScrapDetailTwo);
    }

    getAll(): Array<ScrapDetailsDto> {
        return this.scrapOrders;
    }

    getById(scrapId: number): ScrapDetailsDto {
        return this.scrapOrders.find(s => s.ProductId === scrapId);
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

}

enum ScrapStatus {
    DRAFT = 0,
    DONE = 1,
}