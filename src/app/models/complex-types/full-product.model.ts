import { BillOfMaterial } from '../bom.model';
import { Category } from './../category.model';
import { Product } from './../product.model';
export interface FullProduct {
  product: Product,
  category: Category,
  boms: Array<BillOfMaterial>,
}
