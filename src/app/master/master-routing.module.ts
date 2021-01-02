import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterComponent } from "./master.component";

const masterRoutes: Routes = [
    { 
        path: '', component: MasterComponent,
        children: [

        ]
    }
]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(masterRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class MasterRoutingModule {

}