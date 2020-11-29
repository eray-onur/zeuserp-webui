import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDetailsDto } from 'src/app/models/complex-types/product-details.dto';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  paramsSubscription : Subscription;

  productDetails: ProductDetailsDto;

  profileImageUrl: string;

  @Input()
  showDetails: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = +params["id"];
      this.productDetails = this.productService.getProductDtoById(id);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  navigate(uri: string) {
    console.log('Called route is: ', uri);
    this.router.navigate([uri]);
  }

}
