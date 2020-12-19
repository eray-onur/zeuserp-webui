import { BillOfMaterials } from '../bom.model';
import { Product } from '../product.model';

export interface BomComponentsDto {
    productId: number;
    productName: string;
    bomId: number;
    bomReference: string;
    components: Array<Product>;
}