import { ProductDetailsDto } from './product-details.dto';

export interface ProductListDto {
    ProductId: number;
    ProductName: string;
    CategoryId: number;
    CategoryName: string;
    Description: string;
    CanBePurchased: boolean;
    CanBeSold: boolean;
    ProductQuantity: number;
    ProductCost: number;
    ProductPrice: number;
    ImagePath: string;
    ProductType: string;
    ResponsibleId: number;
    ResponsibleName: string;
    Volume: number;
    Weight: number;
}