import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../manufacturing/manufacturing.endpoints';
import { UnbuildDetailsDto } from '../models/complex-types/unbuild-details.dto';
import { UnbuildListDto } from '../models/complex-types/unbuild-list.dto';
import { OrderUnbuild } from '../models/order-unbuild.model';

@Injectable({providedIn: 'root'})
export class UnbuildOrdersService {

    constructor(private http: HttpClient) {

    }

    getUnbuildById(id: number): Observable<OrderUnbuild> {
        return this.http
        .get<OrderUnbuild>(`${endpoints.root}/${endpoints.unbuildEndpoints.getAsync}/${id}`);
    }

    getUnbuilds(): Observable<Array<OrderUnbuild>> {
        return this.http
        .get<Array<OrderUnbuild>>(`${endpoints.root}/${endpoints.unbuildEndpoints.getAllAsync}`);
    }

    getUnbuildDetails(): Observable<UnbuildDetailsDto> {
        return this.http
        .get<UnbuildDetailsDto>(`${endpoints.root}/${endpoints.unbuildEndpoints.getUnbuildOrdersDetailsDtoAsync}`);
    }

    getUnbuildList(): Observable<Array<UnbuildListDto>> {
        return this.http
        .get<Array<UnbuildListDto>>(`${endpoints.root}/${endpoints.unbuildEndpoints.getUnbuildOrdersListDtoAsync}`);
    }

    addUnbuild(order: OrderUnbuild): void {}

    update(order: OrderUnbuild): void {}

    delete(id: number): void {}
}
