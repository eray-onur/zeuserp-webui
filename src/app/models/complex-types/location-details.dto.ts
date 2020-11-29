export interface LocationDetailsDto {
    locationId?: number;
    locationName: string;
    locationCode: string;
    addressId?: number,
    addressName: string;
    isInternal?: boolean
    parentLocationId?: number;
    parentLocationName?: string;
    locationType: string;
    isScrapLocation?: boolean;
    isReturnLocation?: boolean;
    externalNote?: string;
    stockId?: number;
}