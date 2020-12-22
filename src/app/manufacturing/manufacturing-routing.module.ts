import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingComponent } from './manufacturing.component';
import { ProductAddComponent } from '../inventory/products/product-add/product-add.component';
import { BomComponent } from './bom/bom.component';

const manufacturingRoutes: Routes = [
  { path: '', component: ManufacturingComponent,
    children: [
      { 
        path: 'boms', 
        children: [
          { path: '', component: BomComponent, pathMatch: 'full' }

        ] 
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(manufacturingRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ManufacturingRoutingModule { }
