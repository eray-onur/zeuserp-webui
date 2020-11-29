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
import { OrderReplenishment } from 'src/app/models/order-replenishment.model';
import { VirtualTimeScheduler } from 'rxjs';
import { ReplenishmentService } from 'src/app/services/inventory/replenishments/replenishment.service';

@Component({
  selector: 'app-replenishments-add',
  templateUrl: './replenishments-add.component.html',
  styleUrls: ['./replenishments-add.component.scss']
})
export class ReplenishmentsAddComponent implements OnInit {

  replenishmentDetailsDto: Array<ReplenishmentDetailsDto>;
  products: Array<Product> = new Array<Product>();
  locations: Array<Location> = new Array<Location>();

  productOnHand: number = 0.000;

  replenishmentForm: FormGroup;

  displayedColumns: string[] = ['productName', 'locationName', 'onHandQuantity', 'orderQuantity', 'x'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private productService: ProductService,
    private locationService: LocationService, 
    private replenishmentDetailsService: ReplenishmentDetailsService,
    private replenishmentService: ReplenishmentService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
    ) {
    this.replenishmentDetailsDto = this.replenishmentDetailsService.getAll();
    this.products = this.productService.getAllProducts();
    this.locations = this.locationService.getAll();

    /*
            id: 1,
            productId: 1,
            locationId: 1,
            onHandQuantity: 50.000,
            orderQuantity: 20.000,
            replenishmentStatusId: 0,
    */


    
    this.replenishmentForm = this.formBuilder.group({
      onHandQuantity:  [0.000.toFixed(3),],
      orderQuantity:  [0.000.toFixed(3),],
      productId: [-1],
      locationId: [-1],
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
      console.log("RESULT IS: ", result);
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

  onSubmit() {
    console.log(this.replenishmentForm);
    const replenishmentOrder: OrderReplenishment = {
      productId: Number(this.replenishmentForm.get("productId")),
      locationId: Number(this.replenishmentForm.get("locationId")),
      onHandQuantity: Number(this.replenishmentForm.get("onHandQuantity")),
      orderQuantity: Number(this.replenishmentForm.get("orderQuantity")),
      replenishmentStatusId: 0,
    };

    this.replenishmentService.add(replenishmentOrder);
  }

  onDiscard() {

  }



}

