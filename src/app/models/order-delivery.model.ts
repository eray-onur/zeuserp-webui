export interface OrderDelivery {
  id: number;
  deliveryAddressId: number;
  sourceLocationId: number;
  contactId: number;
  responsibleId: number;
  scheduledDate: Date;
  deliveryOperationsId: number;
  deliveryStatus: string;
}
