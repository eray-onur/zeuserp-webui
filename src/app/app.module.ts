import { ProductService } from './services/product.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { InventoryRoutingModule } from './inventory/inventory-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MasterComponent } from './master/master.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryMenuComponent } from './inventory/inventory-menu/inventory-menu.component';
import { ProductComponent } from './inventory/product/product.component';
import { ProductDetailsComponent } from './inventory/product/product-details/product-details.component';
import { CategoryComponent } from './inventory/category/category.component';
import { CategoryEditComponent } from './inventory/category/category-edit/category-edit.component';
import { ProductAddDialog } from './shared/product-add/product-add.dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './inventory/product/product-add/product-add.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { OrdersComponent } from './inventory/orders/orders.component';
import { OrderDetailsComponent } from './inventory/orders/order-details/order-details.component';
import { OrderAddComponent } from './inventory/orders/order-add/order-add.component';
import { LocationsComponent } from './inventory/locations/locations.component';
import { ContactsComponent } from './inventory/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryMenuComponent,
    MasterComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CategoryEditComponent,
    ProductAddDialog,
    ProductAddComponent,
    ErrorPageComponent,
    OrdersComponent,
    OrderDetailsComponent,
    OrderAddComponent,
    LocationsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
