export interface Location {
  id?: number,
  name: string,
  locationCode?: string,
  locationTypeId: number,
  addressId?: number,
  isInternal?: boolean,
  isScrap?: boolean,
  isReturn?: boolean,
}
