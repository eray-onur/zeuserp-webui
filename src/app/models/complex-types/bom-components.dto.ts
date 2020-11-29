import { BillOfMaterial } from '../bom.model';
import { Product } from '../product.model';

export interface BomComponentsDto {
    productId: number;
    productName: string;
    bom: BillOfMaterial;
    components: Array<Product>;
}