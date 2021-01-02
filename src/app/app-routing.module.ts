import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
const masterRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import("./master/master-routing.module").then( m => m.MasterRoutingModule ),
  },
  {
    path: 'inventory',
    loadChildren: () => import("./inventory/inventory-routing.module").then( m => m.InventoryRoutingModule ),
  },
  {
    path: 'manufacturing',
    loadChildren: () => import("./manufacturing/manufacturing-routing.module").then( m => m.ManufacturingRoutingModule ),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(masterRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
