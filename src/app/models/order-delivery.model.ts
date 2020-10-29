export interface OrderDelivery {
  id: number,
  deliveryAddressId: number,
  sourceLocationId: number,
  scheduledDate: Date,
  deliveryOperationsId: number,
}
