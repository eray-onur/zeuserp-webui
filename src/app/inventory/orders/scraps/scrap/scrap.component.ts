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

  routeSubscription : Subscription;

  scrapDetails: ScrapDetailsDto;
  scrapDetailsSub: Subscription;

  createProductDialogSub: Subscription;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private scrapService: ScrapService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = +params["id"];
      this.scrapDetailsSub = this.scrapService.getScrapDetailsById(id).subscribe(scrapDetails => {
        this.scrapDetails = scrapDetails;
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.scrapDetailsSub.unsubscribe();
  }

  navigate(uri: string) {
    console.log('Called route is: ', uri);
    this.router.navigate([uri]);
  }

  openDialog(): void {

    this.createProductDialogSub = this.productService.getProductById(this.scrapDetails.ProductId).subscribe(
      p => {
        let dialogRef = this.dialog.open(CreateProductDialog, {
          width: '300px',
          data: p,
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log("[CreateProductDialog]");
          console.log(result);
          this.createProductDialogSub.unsubscribe();
        });
      }
    );

  }

}
