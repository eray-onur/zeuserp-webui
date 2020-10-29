export interface TransferModel {
  id?: number,
  fromLocationId: number,
  toLocationId: number,
  contactId: number,
  scheduledDate: Date,
  deadline?: Date
  status: number,
  responsibleId?: number,
  operationTypeId?: number
}
