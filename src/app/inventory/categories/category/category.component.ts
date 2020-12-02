import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryDetailsDto } from 'src/app/models/complex-types/category-details.dto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'category-details',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  paramsSubscription : Subscription;

  categoryDetailsDto: CategoryDetailsDto;
  categoryDetailsSub: Subscription;

  @Input()
  showDetails: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = +params["id"];
      this.categoryDetailsSub = this.categoryService.getCategoryDetailsDto(id).subscribe(c => {
        this.categoryDetailsDto = c;
      });
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
