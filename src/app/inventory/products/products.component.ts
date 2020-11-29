import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListDto } from 'src/app/models/complex-types/product-list.dto';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productListDtos: ProductListDto = {};
  products: Array<Product>;

  name: string;

  constructor(
    private productService: ProductService,
    private router: Router
    ) { 
      
    }

  async ngOnInit() {
    this.productListDtos = await this.productService.getProductListDtoAsync();
  }

  

  editProduct(productId: number) {
    this.router.navigate(["/", "inventory", "products" , "edit", productId]);
  }

  showProductDetails(productId: number) {
    this.router.navigate(["/", "inventory", "products", productId]);
  }

}
