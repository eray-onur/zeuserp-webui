import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product.model';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';
import { CategoryDetailsDto } from 'src/app/models/complex-types/category-details.dto';
import { Subscription } from 'rxjs';
@Component({
  selector: 'category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements  OnDestroy {

  routeSub: Subscription; 

  category: Category;
  categories: Array<Category>;
  categoriesSub: Subscription;
  categoryDetailsDto: CategoryDetailsDto;
  categoryDetailsSub: Subscription;

  @ViewChild('btnSubmit')
  btnSubmit: ElementRef;

  @Input()
  inDialogMode: boolean = false;

  @Output()
  onCategoryAdded: EventEmitter<Category> = new EventEmitter<Category>();

  @Output()
  onDialogDiscard: EventEmitter<boolean> = new EventEmitter<boolean>();

  categoryForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { 
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      parentCategory: []
    });
    this.categoriesSub = this.categoryService.getAll().subscribe(c => {
      this.categories = c;
    });
    this.routeSub = this.route.params.subscribe(p => {
      if(p["id"] !== undefined) {
        const id: number = +p["id"];
        console.log("Category ID is: ", id);
        this.categoryDetailsSub = this.categoryService
        .getCategoryDetailsDto(id).subscribe(c => {
          this.categoryDetailsDto = c;
        });
        this.categoryForm.get("name").setValue(this.category.name);
        this.categoryForm.get("description").setValue(this.category.description);
 
        const subId: number = this.category.subcategoryId;
        if(this.categoryForm.get("parentCategory"))  {
          this.categoryForm.get("parentCategory").setValue(subId);
        }
        
      }
    });
   }

  ngOnDestroy(): void {
    if(this.inDialogMode) {
      this.onCategoryAdded.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if(this.categoryDetailsSub) {
      this.categoryDetailsSub.unsubscribe();
    }
  }


  navigate(uri: string) {
    this.router.navigate([uri]);
  }

  onSubmit() {
    console.log("[Category] Name: " + this.categoryForm.get("name").value);
    console.log("[Category] Description: " + this.categoryForm.get("description").value);
    const category: Category = {
      name: this.categoryForm.get("name").value,
      description: this.categoryForm.get("description").value,
      subcategoryId: this.categoryForm.get("parentCategory").value ?? -1,
    };

    if(this.inDialogMode) {
      this.onCategoryAdded.emit(category);
    } else {
      // Add product to db.
      console.log("Category to Submit: ");
      console.log(category);
    }
    this.categoryService.add(category).subscribe(r => {
      console.log(r);
    });
  }

  onDiscard() {
    if(this.inDialogMode) {
      this.onDialogDiscard.emit(true);
    }
  }


}
