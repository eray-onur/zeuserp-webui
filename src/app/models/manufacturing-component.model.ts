export interface ManufacturingComponent {
    id?: number;
    productId?: string;
    quantityToConsume: number;
    quantityConsumed: number;
    isAvailable?: boolean;
}