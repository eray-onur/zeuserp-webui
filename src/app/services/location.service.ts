import { Injectable } from '@angular/core';
import { LocationDetailsDto } from '../models/complex-types/location-details.dto';
import { LocationListDto } from '../models/complex-types/location-list.dto';
import { Location } from './../models/location.model';
@Injectable({
    providedIn: 'root'
})
export class LocationService {

    locations: Array<Location>;

    constructor() {

        this.locations = new Array<Location>();

        const locationOne: Location = {
            id: 1,
            name: 'Example Location #1',
            locationCode: 'LO_EX01',
            locationTypeId: 1,
            addressId: 1,
            isInternal: true,
        }
        
        const locationTwo: Location = {
            id: 2,
            name: 'Example Location #2',
            locationCode: 'LO_EX02',
            locationTypeId: 1,
            addressId: 2,
            isInternal: false,
        }

        this.locations.push(locationOne, locationTwo);

    }

    add(location: Location): void {
        this.locations.push(location);
    }

    getAll(): Array<Location> {
        return this.locations;
    }

    getById(id: number): Location {
        return this.locations.find(l => l.id === id);
    }

    getLocationDetailsById(id: number): LocationDetailsDto {
        var locDetails : LocationDetailsDto = {
            locationId: id,
            locationName: "Ergene Vadisi C7 D8",
            locationCode: "EV C7 D8",
            addressId: 1,
            addressName: 'Ergene Vadisi',
            locationType: 'Ev',
        };

        return locDetails;
    }

    getLocationListDto(): Array<LocationListDto> {
        const locationOne: Location = {
            id: 1,
            name: 'Example Location #1',
            locationCode: 'LO_EX01',
            locationTypeId: 1,
            addressId: 1,
            isInternal: true,
        }
        
        const locationTwo: Location = {
            id: 2,
            name: 'Example Location #2',
            locationCode: 'LO_EX02',
            locationTypeId: 1,
            addressId: 2,
            isInternal: false,
        }

        const locationListDtoOne: LocationListDto = {
            locationId: locationOne.id,
            locationName: locationOne.name,
            locationTypeName: locationOne.locationCode
        };

        const locationListDtoTwo: LocationListDto = {
            locationId: locationTwo.id,
            locationName: locationTwo.name,
            locationTypeName: locationTwo.locationCode
        };

        return [locationListDtoOne, locationListDtoTwo];
    }
}