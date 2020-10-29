import { Product } from './../../models/product.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.dialog.html',
  styleUrls: ['./product-add.dialog.scss']
})
export class ProductAddDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Product) { }


  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
