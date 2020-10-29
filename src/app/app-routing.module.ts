import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ProductAddDialog } from './shared/product-add/product-add.dialog';
import { InventoryRoutingModule } from './inventory/inventory-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';


const masterRoutes: Routes = [
  {
    path: '',
    component: MasterComponent
  },
  {
    path: 'inventory',
    loadChildren: () => import("./inventory/inventory-routing.module").then( m => m.InventoryRoutingModule ),
  },
  {
    path: '**',
    component: ErrorPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(masterRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
