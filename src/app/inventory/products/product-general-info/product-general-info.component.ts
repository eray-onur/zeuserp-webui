import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductType } from 'src/app/models/enums/product-type.enum';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-general-info',
  templateUrl: './product-general-info.component.html',
  styleUrls: ['./product-general-info.component.scss']
})
export class ProductGeneralInfoComponent implements OnInit {
  /*
  Product General Info'da ne olmali?

    product type
    product category
    sales price
    cost
  */
  @Input("product-type") productTypeId: number;
  // This might be link to a category later.
  @Input("product-category") productCategory: number;
  @Input("sales-price") salesPrice: number;
  @Input("cost") cost: number;
  @ViewChild("productType", {static: true}) productType: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.setProductType();
  }

  setProductType() {
    this.productType.nativeElement.innerText = ProductType[this.productTypeId];
  }

}