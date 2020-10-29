export interface OrderManufacturing {
  id: number,
  producedQuantity: number,
  bomId: number,
  scheduledDate: Date,
  responsibleId: number,
  usedComponentsId: number,
  usedComponentsLocationId: number,
  usedProductsLocationId: number,
  orderStatus: OrderStatus
}
