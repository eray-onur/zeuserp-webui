export interface WarehouseLocationDto {
    id?: number,
    warehouseCode: string,
    name: string,
    hasLimitedStockCount?: boolean,
    stockLimit?: number,
    usedForManufacture?: boolean,
    routeListId?: number,
    locationId?: number,
    locationName: string,
    photoPath?: string,
  }
  