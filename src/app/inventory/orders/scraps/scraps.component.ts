import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrapDetailsDto } from 'src/app/models/complex-types/scrap-details.dto';
import { ScrapListDto } from 'src/app/models/complex-types/scrap-list.dto';
import { LocationService } from 'src/app/services/location.service';
import { ProductService } from 'src/app/services/product.service';
import { ScrapService } from 'src/app/services/scrap.service';

@Component({
  selector: 'app-scraps',
  templateUrl: './scraps.component.html',
  styleUrls: ['./scraps.component.scss']
})
export class ScrapsComponent implements OnInit {

  displayedColumns: string[] = [
    'ScrapOrderCode',
    'ProductName',
    'ScrappedQuantity',
    'SourceLocationName',
    'ScrapLocationName',
    'ScrapStatus', 
    'details'
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  scrapOrdersDto: Array<ScrapListDto> = new Array<ScrapListDto>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrapService: ScrapService,
    private locationService: LocationService,
    private productService: ProductService,
    ) { 
      const scraps = this.scrapService.getAll();
      scraps.forEach(s => {
        const scrapLocation = this.locationService.getById(s.scrapLocationId);
        const sourceLocation = this.locationService.getById(s.sourceLocationId);
        const product = this.productService.getProductById(s.productId);
        const scrapDto: ScrapListDto = {
          ScrapId: s.id,
          ScrapOrderCode: s.orderCode,
          ScrapLocationId: scrapLocation.id,
          ScrapLocationName: scrapLocation.name,
          SourceLocationId: sourceLocation.id,
          SourceLocationName: sourceLocation.name,
          ProductId: product.id,
          ProductName: product.name,
          ScrappedQuantity: s.quantity,
          ScheduledDate: s.scheduledDate,
          CompletedDate: s.completedDate,
          ScrapStatus: s.scrapStatus,
        }
        this.scrapOrdersDto.push(scrapDto);
      });
  
    }

  
  ngOnInit(): void {
    console.log("NEW DTO IS: ", this.scrapOrdersDto);
    this.dataSource = new MatTableDataSource<ScrapListDto>(this.scrapOrdersDto);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigateToScrap(id: number) {
    this.router.navigate(['/','inventory', 'orders', 'scraps', id]);
  }

  navigateToScrapAdd() {
    this.router.navigate(['/','inventory', 'orders', 'scraps', 'add']);
  }

  navigateToEditScrap(id: number) {
    this.router.navigate(['/','inventory', 'orders', 'scraps', 'edit', id]);
  }

  navigateToProduct(productId: number) {
    this.router.navigate(['/','inventory', 'products', productId]);
  }

}
