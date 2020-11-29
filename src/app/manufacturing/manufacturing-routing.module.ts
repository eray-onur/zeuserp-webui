import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingComponent } from './manufacturing.component';

const manufacturingRoutes: Routes = [
  { path: '', component: ManufacturingComponent,
    children: [
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
