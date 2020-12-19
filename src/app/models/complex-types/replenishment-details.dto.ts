export interface ReplenishmentDetailsDto {
    id?: number;
    productId?: number;
    productName?: string;
    locationId?: number;
    locationName?: string;
    onHandQuantity: number;
    orderedQuantity: number;
    replenishmentStatusId: ReplenishmentStatus;
}
  
enum ReplenishmentStatus {
    DRAFTED = 0,
    IN_PROGRESS = 1,
    CANCELLED = 2,
    INSUFFICIENT = 3,
    COMPLETE = 4,
}
  