import { Injectable } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';

@Injectable({ providedIn: 'root' })
export class WarehouseService {
    warehouses: Array<Warehouse>;

    constructor() {
        this.warehouses = new Array<Warehouse>();

        const exampleWarehouse: Warehouse = {
            id: 1,
            warehouseCode: 'ZE_01',
            name: 'Zeus Main Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }
        const exampleWarehouseTwo: Warehouse = {
            id: 2,
            warehouseCode: 'ZE_01',
            name: 'Zeus Main Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }
        const exampleWarehouseThree: Warehouse = {
            id: 3,
            warehouseCode: 'ZE_01',
            name: 'Zeus Secondary Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }
        const exampleWarehouseFour: Warehouse = {
            id: 4,
            warehouseCode: 'ZE_01',
            name: 'Zeus Main Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }
        const exampleWarehouseFive: Warehouse = {
            id: 5,
            warehouseCode: 'ZE_01',
            name: 'Zeus Main Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }
        const exampleWarehouseSix: Warehouse = {
            id: 6,
            warehouseCode: 'ZE_01',
            name: 'Zeus Main Stock',
            hasLimitedStockCount: true,
            stockLimit: 3000,
            usedForManufacture: true,
            locationId: 1,
        }

        this.warehouses.push(
            exampleWarehouse, 
            exampleWarehouseTwo, 
            exampleWarehouseThree, 
            exampleWarehouseFour, 
            exampleWarehouseFive, 
            exampleWarehouseSix
        );
    }

    getAll(): Array<Warehouse> {
        return this.warehouses;
    }

    getWarehouseById(warehouseId: number) {
        return this.warehouses.find(w => w.id === warehouseId);
    }

    add(item: Warehouse): void {
        this.warehouses.push(item);
    }

}