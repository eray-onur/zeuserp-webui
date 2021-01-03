import { EcoStage } from "./enums/eco-stage.enum";

export interface EngineeringChangeOrder {
    id?: number;
    summary: string;
    responsibleId: number;
    applyOn: boolean;
    productId: number;
    effectivity: boolean;
    effectivityDate?: Date;
    ecoTagsId?: number;
    note: string;
    approverId: number;
    ecoStage: EcoStage;
}