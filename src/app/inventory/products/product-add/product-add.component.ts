import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product.model';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsDto } from 'src/app/models/complex-types/product-details.dto';
import { stringify } from 'querystring';
@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, AfterViewInit {

  profileImageUrl: string;
  
  product: Product;

  productTypes: Array<object> = [
    {id: 0, value: "Producable"},
    {id: 1, value: "Consumable"},
  ];

  @ViewChild('btnSubmit')
  btnSubmit: ElementRef;

  @Input()
  inDialogMode: boolean = false;

  @Output()
  onProductAdded: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  onDialogDiscard: EventEmitter<boolean> = new EventEmitter<boolean>();

  productForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { 
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      productType: [0],
      canBePurchased: [false],
      canBeSold: [false],
      barcodeNumber: [''],
      unitCount: [0.000, ],
      unitPrice: [0.000],
      unitCost: [0.000],
      volume: [0.000],
      weight: [0.000],
      imgPath: [''],
    });
   }

  ngOnInit() {
    this.route.params.subscribe(p => {
      const id = +p["id"];
      console.log("Id: " + id);
      // If an id parameter was given during routing.
      if(id !== undefined) {
        console.log("There is a parameter. Id is: " + id);
        const fetchedProduct = this.productService.getProductById(id);
        console.log("Fetched product is: ");
        console.log(fetchedProduct);
        this.product = fetchedProduct;
  
        this.productForm.get("name").setValue(fetchedProduct.name);
        this.productForm.get("description").setValue(fetchedProduct.description);
        this.productForm.get("unitCost").setValue(fetchedProduct.unitCost.toFixed(3));
        this.productForm.get("unitCount").setValue(fetchedProduct.unitCount.toFixed(3));
        this.productForm.get("unitPrice").setValue(fetchedProduct.unitPrice.toFixed(3));
        // this.productForm.get("productType").setValue(fetchedProduct.type);
        this.productForm.get("volume").setValue(fetchedProduct.volume.toFixed(3));
        this.productForm.get("weight").setValue(fetchedProduct.weight.toFixed(3));
      } 
    })
  }

  ngAfterViewInit() {

  }

  navigate(uri: string) {
    console.log('Called route is: ', uri);
    this.router.navigate([uri]);
  }

  onSubmit() {
    console.log(this.productForm.get("name").value);
    console.log(this.productForm.get("description").value);
    console.log(this.productForm.get("productType").value);

    const product: Product = {
      name: this.productForm.get("name").value,
      description: this.productForm.get("description").value,
      unitCost: this.productForm.get("unitCost").value,
      unitCount: this.productForm.get("unitCount").value,
      unitPrice: this.productForm.get("unitPrice").value,
      type: this.productForm.get("productType").value,
      volume: this.productForm.get("volume").value,
      weight: this.productForm.get("weight").value,
    };

    if(this.inDialogMode) {
      this.onProductAdded.emit(product);
    } else {
      // Add product to db.
      this.productService.add(product);
    }
  }

  onDiscard() {
    if(this.inDialogMode) {
      this.onDialogDiscard.emit(true);
    }
  }


}
