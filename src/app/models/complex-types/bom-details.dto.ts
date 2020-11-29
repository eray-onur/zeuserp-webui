import { BillOfMaterialComponents } from '../bom-components.model';

export interface BomDetailsDto {
    bomId: number;
    productId: number;
    productName: string;
    bomType: string;
    components: Array<BillOfMaterialComponents>;
    version: string;
    flexibleConsumption: number;
}