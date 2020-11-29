import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScrapDetailsDto } from 'src/app/models/complex-types/scrap-details.dto';
import { ProductService } from 'src/app/services/product.service';
import { ScrapService } from 'src/app/services/scrap.service';
import { CreateProductDialog } from 'src/app/shared/dialogs/create-item/create-product-dialog/create-product-dialog';
@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.scss']
})
export class ScrapComponent implements OnInit {

  paramsSubscription : Subscription;

  scrapDetails: ScrapDetailsDto;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private scrapService: ScrapService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = +params["id"];
      this.scrapDetails = this.scrapService.getScrapDetailsById(id);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  navigate(uri: string) {
    console.log('Called route is: ', uri);
    this.router.navigate([uri]);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateProductDialog, {
      width: '300px',
      data: this.productService.getProductById(this.scrapDetails.ProductId),
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
