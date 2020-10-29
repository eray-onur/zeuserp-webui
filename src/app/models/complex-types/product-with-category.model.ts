import { Category } from './../category.model';
import { Product } from './../product.model';
export interface ProductWithCategory {
  product: Product,
  category: Category
}
