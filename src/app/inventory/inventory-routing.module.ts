import { ContactsComponent } from './contacts/contacts.component';
import { LocationsComponent } from './locations/locations.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { InventoryMenuComponent } from './inventory-menu/inventory-menu.component';
import { InventoryComponent } from './inventory.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const inventoryRoutes: Routes = [
  { path: '', component: InventoryComponent,
    children: [
      { path: '', component: InventoryMenuComponent },
      { path: 'add-product', component: ProductAddComponent },
      { path: 'edit-product/:id', component: ProductAddComponent },
      {
        path: 'orders',
        children: [
          { path: '', component: OrdersComponent, pathMatch: 'full' },
          { path: ':id', component: OrderDetailsComponent },
        ],
      },
      {
        path: 'locations',
        children: [
          { path: '', component: LocationsComponent, pathMatch: 'full' },
        ],
      },
      {
        path: 'contacts',
        children: [
          { path: '', component: ContactsComponent, pathMatch: 'full' },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(inventoryRoutes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
