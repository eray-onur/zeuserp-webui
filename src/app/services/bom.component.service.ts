import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../manufacturing/manufacturing.endpoints';
import { BillOfMaterials } from '../models/bom.model';
import { BomComponentDto } from '../models/complex-types/bom-component.dto';
import { BomDetailsDto } from '../models/complex-types/bom-details.dto';
import { BomListDto } from '../models/complex-types/bom-list.dto';

@Injectable({providedIn: 'root'})
export class BomComponentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }
  getBomComponentById(id: number): Observable<BillOfMaterials> {
    return this.http.get<BillOfMaterials>(`${endpoints.root}/${endpoints.bomEndpoints.getAsync}/${id}`);
  }
  getAllBomComponents(): Observable<Array<BillOfMaterials>> {
    return this.http.get<Array<BillOfMaterials>>(`${endpoints.root}/${endpoints.bomEndpoints.getAllAsync}`);
  }

  getBomComponentDetailsDto(id: number): Observable<Array<BomDetailsDto>> {
    return this.http.get<Array<BomDetailsDto>>(`${endpoints.root}/${endpoints.bomEndpoints.componentDetailsAsync}/${id}`);
  }
  add(bom: BillOfMaterials): Observable<any> {
    return this.http.post<BillOfMaterials>(`${endpoints.root}/${endpoints.bomEndpoints.addAsync}`, bom, this.httpOptions);
  }
  update(bom: BillOfMaterials): Observable<any> {
    return this.http.put<BillOfMaterials>(`${endpoints.root}/${endpoints.bomEndpoints.updateAsync}/${bom.id}`, bom);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<BillOfMaterials>(`${endpoints.root}/${endpoints.bomEndpoints.deleteAsync}/${id}`);
  }
}
