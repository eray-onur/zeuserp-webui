import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplenishmentDetailsDto } from 'src/app/models/complex-types/replenishment-details.dto';
import { Product } from 'src/app/models/product.model';
import { Location } from 'src/app/models/location.model';
import { LocationService } from 'src/app/services/location.service';
import { ProductService } from 'src/app/services/product.service';
import { CreateProductDialog } from 'src/app/shared/dialogs/create-item/create-product-dialog/create-product-dialog';
import { CreateLocationDialog } from 'src/app/shared/dialogs/create-item/create-location-dialog/create-location-dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderReplenishment } from 'src/app/models/order-replenishment.model';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderReplenishmentService } from 'src/app/services/order-replenishment.service';

@Component({
  selector: 'app-replenishments-add',
  templateUrl: './replenishments-add.component.html',
  styleUrls: ['./replenishments-add.component.scss']
})
export class ReplenishmentsAddComponent implements OnInit {

  replenishmentDetailsDto: Array<ReplenishmentDetailsDto>;
  replenishmentDetailsSub: Subscription;

  products: Array<Product> = new Array<Product>();
  productsSub: Subscription;

  locations: Array<Location> = new Array<Location>();
  locationsSub: Subscription;

  productOnHand: number = 0.000;

  replenishmentForm: FormGroup;

  routeSubscription: Subscription;

  displayedColumns: string[] = ['productName', 'locationName', 'onHandQuantity', 'orderQuantity', 'x'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private productService: ProductService,
    private locationService: LocationService,
    private replenishmentService: OrderReplenishmentService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    ) {
      this.routeSubscription = this.route.params["id"].subscribe(p => {
        const id = +p;
        if (id) {
          this.replenishmentDetailsSub = this.replenishmentService.getReplenishmentDetailsById(id).subscribe(r => {
            this.replenishmentDetailsDto.push(r);
          });
        }
      });

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.replenishmentDetailsDto);
  }

  openProductDialog(): void {
    let dialogRef = this.dialog.open(CreateProductDialog, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('RESULT IS: ', result);
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
    console.log('On change product is below.');
    console.log(product);
    if(product !== undefined) {
      this.productOnHand = Number(product.unitCount);
      return;
    }
    this.productOnHand = 0.000;
  }

  onSubmit() {
    console.log(this.replenishmentForm);
    // const replenishmentOrder: OrderReplenishment = {
    //   productId: Number(this.replenishmentForm.get('productId')),
    //   locationId: Number(this.replenishmentForm.get('locationId')),
    //   onHandQuantity: Number(this.replenishmentForm.get('onHandQuantity')),
    //   orderQuantity: Number(this.replenishmentForm.get('orderQuantity')),
    //   replenishmentStatusId: 0,
    // };

    //this.replenishmentService.addReplenishment();
  }

  onDiscard() {

  }



}

