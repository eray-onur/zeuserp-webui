import { BillOfMaterials } from '../bom.model';
import { Product } from '../product.model';

export interface BomComponentDto {
    productId: number;
    productName: string;
    bomId: number;
    bomReference: string;
}