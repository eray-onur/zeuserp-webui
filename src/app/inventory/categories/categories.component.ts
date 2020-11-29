import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryListDto } from 'src/app/models/complex-types/category-list.dto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryListDtos: Array<CategoryListDto>;

  name: string;

  constructor(
    private categoryService: CategoryService,
    private router: Router
    ) { 
      this.categoryListDtos = this.categoryService.getCategoryListDto();
    }

  ngOnInit(): void {
    console.log(this.categoryListDtos);
  }

  

  editCategory(categoryId: number) {
    this.router.navigate(["/", "inventory", "categories" , "edit", categoryId]);
  }

  showCategoryDetails(categoryId: number) {
    this.router.navigate(["/", "inventory", "categories", categoryId]);
  }

}
