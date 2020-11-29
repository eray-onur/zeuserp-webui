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
import { CreateProductDialog } from 'src/app/shared/dialogs/create-item/create-product-dialog/create-product-dialog';
import { CreateLocationDialog } from 'src/app/shared/dialogs/create-item/create-location-dialog/create-location-dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-replenishment',
  templateUrl: './replenishment.component.html',
  styleUrls: ['./replenishment.component.scss']
})
export class ReplenishmentComponent implements OnInit {

  replenishmentDetailsDto: Array<ReplenishmentDetailsDto>;
  products: Array<Product> = new Array<Product>();
  locations: Array<Location> = new Array<Location>();

  productOnHand: number = 0.000;

  replenishmentForm: FormGroup;

  displayedColumns: string[] = ['productName', 'locationName', 'onHandQuantity', 'orderedQuantity', 'x'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private productService: ProductService,
    private locationService: LocationService, 
    private replenishmentDetailsService: ReplenishmentDetailsService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
    ) {
    this.replenishmentDetailsDto = this.replenishmentDetailsService.getAll();
    this.products = this.productService.getAllProducts();
    this.locations = this.locationService.getAll();

    
    this.formBuilder.group({
      replenishedQuantity:  [0.000, ],
    });

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.replenishmentDetailsService.getAll());
  }

  openProductDialog(): void {
    let dialogRef = this.dialog.open(CreateProductDialog, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("RESULT IS: ", result.name);
      this.products.push(result);
    });
  }

  openLocationDialog(): void {
    let dialogRef = this.dialog.open(CreateLocationDialog, {
      width: '500px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  changeOnHandQuantity(product: Product) {
    console.log("On change product is below.");
    console.log(product);
    if(product !== undefined) {
      this.productOnHand = Number(product.unitCount);
      return;
    }
    this.productOnHand = 0.000;
  }



}

