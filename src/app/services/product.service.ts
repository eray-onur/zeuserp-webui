
import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();

    const exampleProduct: Product = {
      id: 1,
      name: "Tahta Masa",
      description: "Developer'larin laptoplarini koymasi icin satin alindi.",
      imgPath: 'https://eastburncountryfurniture.co.uk/wp-content/uploads/2018/03/Rustic_Wooden_Table_TB008a.jpg',
      unitCost: 50.00,
      unitPrice: 75.00,
      unitCount: 10.00,
      canBeSold: true,
      canBePurchased: true,
      responsibleId: 1,
      weight: 5.00,
      volume: 10.00,
      type: 1.
    };
    const exampleProductTwo: Product = {
      id: 2,
      name: "Tahta Masa #2",
      description: "Developer'larin laptoplarini koymasi icin satin alindi.",
      imgPath: 'https://eastburncountryfurniture.co.uk/wp-content/uploads/2018/03/Rustic_Wooden_Table_TB008a.jpg',
      unitCost: 50.00,
      unitPrice: 75.00,
      unitCount: 10.00,
      canBeSold: true,
      canBePurchased: true,
      responsibleId: 1,
      weight: 5.00,
      volume: 10.00,
      type: 1,
    };
    const exampleProductThree: Product = {
      id: 3,
      name: "Tahta Masa #3",
      description: "Developer'larin laptoplarini koymasi icin satin alindi.",
      imgPath: 'https://eastburncountryfurniture.co.uk/wp-content/uploads/2018/03/Rustic_Wooden_Table_TB008a.jpg',
      unitCost: 50.00,
      unitPrice: 75.00,
      unitCount: 5.00,
      canBeSold: true,
      canBePurchased: true,
      responsibleId: 1,
      weight: 5.00,
      volume: 10.00,
      type: 2,
    };
    const exampleProductFour: Product = {
      id: 4,
      name: "Tahta Masa #4",
      description: "Developer'larin laptoplarini koymasi icin satin alindi.",
      imgPath: 'https://eastburncountryfurniture.co.uk/wp-content/uploads/2018/03/Rustic_Wooden_Table_TB008a.jpg',
      unitCost: 50.00,
      unitPrice: 75.00,
      unitCount: 15.00,
      canBeSold: true,
      canBePurchased: true,
      responsibleId: 1,
      weight: 5.00,
      volume: 10.00,
      type: 3,
    };
    this.products.push(exampleProduct, exampleProductTwo, exampleProductThree, exampleProductFour);
    console.log(this.products.length);
  }

  getAllProducts() : Array<Product> {
    console.log(this.products);
    return this.products;
  }

  getProductById(id: number) : Product {
    console.log(id);
    console.log(this.products.find(p => p.id == id));
    return this.products.find(p => p.id == id);
  }

  add(product: Product) : void {
    this.products.push(product);
    console.log("New index of products array is: ", this.products.length);
  }

}
