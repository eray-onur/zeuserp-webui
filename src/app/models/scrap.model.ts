export interface Scrap {
  id: number,
  orderCode: string,
  description: string,
  productId: number,
  quantity: number,
  scheduledDate: Date,
  completedDate: Date,
  sourceLocationId: number,
  scrapLocationId: number,
  scrapStatus: number,
}