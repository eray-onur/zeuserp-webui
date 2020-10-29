export interface Replenishment {
  id: number,
  productId: number,
  locationId: number,
  warehouseId: number,
  bomId: number
  onHandQuantity: number,
  orderQuantity: number,
}
