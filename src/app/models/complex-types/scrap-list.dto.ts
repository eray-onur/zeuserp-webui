export interface ScrapListDto {
    ScrapId: number;
    ScrapOrderCode: string;
    ProductId: number;
    ProductName: string;
    ScrappedQuantity: number;
    ScheduledDate: Date;
    CompletedDate: Date;
    SourceLocationId: number;
    SourceLocationName: string;
    ScrapLocationId: number;
    ScrapLocationName: string;
    ScrapStatus: ScrapStatus;
}

enum ScrapStatus {
    DRAFT = 0,
    DONE = 1,
}