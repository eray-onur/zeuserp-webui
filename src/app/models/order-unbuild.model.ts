export interface OrderUnbuild {
    id: number;
    reference: string;
    manufacturingOrderId: number;
    bomId: number;
    quantity: number;
    sourceLocationId: number;
    destinationLocationId: number;
}

/* 

    public int Id { get; set; }
    public string Reference { get; set; }
    public int ManufacturingOrderId { get; set; }
    public int BoMId { get; set; }
    public decimal Quantity { get; set; }
    public int SourceLocationId { get; set; }
    public int DestinationLocationId { get; set; }

*/