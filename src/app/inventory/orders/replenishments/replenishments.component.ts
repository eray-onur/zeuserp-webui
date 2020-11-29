import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplenishmentDetailsDto } from 'src/app/models/complex-types/replenishment-details.dto';
import { Product } from 'src/app/models/product.model';
import { Location } from 'src/app/models/location.model';
import { ReplenishmentDetailsService } from 'src/app/services/inventory/replenishments/replenishment-details.service';
import { LocationService } from 'src/app/services/location.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-replenishments',
  templateUrl: './replenishments.component.html',
  styleUrls: ['./replenishments.component.scss']
})
export class ReplenishmentsComponent implements OnInit, AfterViewInit {

  replenishmentDetailsDto: Array<ReplenishmentDetailsDto>;
  products: Array<Product> = new Array<Product>();
  locations: Array<Location> = new Array<Location>();

  displayedColumns: string[] = ['productName', 'locationName', 'onHandQuantity', 'orderedQuantity'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private productService: ProductService,
    private locationService: LocationService, 
    private replenishmentDetailsService: ReplenishmentDetailsService,
    ) {
    this.replenishmentDetailsDto = this.replenishmentDetailsService.getAll();
    this.products = this.productService.getAllProducts();
    this.locations = this.locationService.getAll();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.replenishmentDetailsService.getAll());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

