import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseLocationDto } from 'src/app/models/complex-types/warehouse-location.dto';
import { Warehouse } from 'src/app/models/warehouse.model';
import { LocationService } from 'src/app/services/location.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

import { Location } from './../../models/location.model';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'name', 'warehouseCode', 'locationReference', 'details'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  warehousesDto: Array<WarehouseLocationDto>;

  constructor(
    private warehouseService: WarehouseService, 
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute) {
      this.warehousesDto = new Array<WarehouseLocationDto>();
      const warehouses = this.warehouseService.getAll();
      warehouses.forEach(w => {
        let location: Location = this.locationService.getById(w.locationId);
        let warehouseDto: WarehouseLocationDto = {
          ...w,
          locationId: location.id,
          locationName: location.name
        }
        this.warehousesDto.push(warehouseDto);
        console.log(warehouseDto);
      });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.warehouseService.getAll());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.paginator);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigateToLocation(id: number) {
    this.router.navigate(['/','inventory', 'locations', id]);
  }

  navigateToWarehouse(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

  navigateToEditWarehouse(id: number) {
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

}
