import { Injectable } from '@angular/core';
import { Address } from './../models/address.model';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    addresses: Array<Address>;

    constructor() {
        this.addresses = new Array<Address>();

        const exampleAddress: Address = {
            id: 1,
            name: 'Example Address #1',
            description: 'Example Address #1 Description'
        };
        const exampleAddressTwo: Address = {
            id: 2,
            name: 'Example Address #2',
            description: 'Example Address #2 Description'
        };

        this.addresses.push(exampleAddress, exampleAddressTwo);
    }

    getAll() {
        return this.addresses;
    }

    getById(id: number) {
        return this.addresses.find(a => a.id === id);
    }
}