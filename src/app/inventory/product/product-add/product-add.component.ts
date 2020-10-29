import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  profileImageUrl: string = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/14/1414e1e48494e3da0a69bf9419a4fd40ebe1b451_full.jpg";

  productForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    // TODO: Solve enum issue and make it work with select. Implement select for Product Type AND Category
    //
    barcodeNumber: new FormControl(""),
    unitCount: new FormControl(),
    unitPrice: new FormControl(),
    unitCost: new FormControl(),
    imgPath: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params["id"];
      if(productId !== null) {
        const product = this.productService.getProductById(productId);

        console.log(this.productService.getProductById(productId));

        this.productForm.get("name").setValue(product.name)
        this.productForm.get("description").setValue(product.description)
        this.productForm.get("unitCost").setValue(product.unitCost)
        this.productForm.get("unitCount").setValue(product.unitCount)
        this.productForm.get("unitPrice").setValue(product.unitPrice)
        // TODO: Fetch image from server to the product image.
      }
    });
  }

  onProductFormSubmit() : void {
    console.warn(this.productForm.value);
    if(this.productForm.valid) {
      const productToAdd: Product = {
        name: this.productForm.get("name").value,
        description: this.productForm.get("description").value,
        unitCount: Number(this.productForm.get("unitCount").value),
        unitPrice: Number(this.productForm.get("unitPrice").value),
        unitCost: Number(this.productForm.get("unitCost").value),
        type: 1,
        imgPath: this.profileImageUrl
      }
      this.productService.add(productToAdd);
      this.router.navigate(["/", "inventory"]);
    }
  }

  onDiscard() : void {
    this.router.navigate(["/", "inventory"]);
  }

  submitImg(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.profileImageUrl = event.target.result.toString();
      }
    }
  }
}
