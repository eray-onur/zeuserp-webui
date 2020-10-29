import { Product } from './../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddDialog } from 'src/app/shared/product-add/product-add.dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-page',
  templateUrl: './inventory-menu.component.html',
  styleUrls: ['./inventory-menu.component.scss']
})
export class InventoryMenuComponent implements OnInit {

  products: Array<Product>;

  name: string;
  animal: string;

  selectedOperationOption: string = "duplicate"

  constructor(public dialog: MatDialog,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  openNewProductDialog(product: Product): void {
    let dialogRef = this.dialog.open(ProductAddDialog, {
      data: product,
      panelClass: 'product-add-dialog'
    })

    dialogRef.afterClosed().subscribe( result => {
      console.log("Dialog was closed.");
      this.animal = result;
    })
  }

  editProduct(productId: number) {
    this.router.navigate(["/", "inventory", "edit-product", productId]);
  }

}
