import { ProductService } from './services/product.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MasterComponent } from './master/master.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryMenuComponent } from './inventory/inventory-menu/inventory-menu.component';
import { ProductComponent } from './inventory/products/product/product.component';
import { CategoryComponent } from './inventory/categories/category/category.component';
import { ProductAddComponent } from './inventory/products/product-add/product-add.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { OrdersComponent } from './inventory/orders/orders.component';
import { OrderAddComponent } from './inventory/orders/order-add/order-add.component';
import { LocationsComponent } from './inventory/locations/locations.component';
import { ContactsComponent } from './inventory/contacts/contacts.component';
import { ProductGeneralInfoComponent } from './inventory/products/product-general-info/product-general-info.component';
import { ProductsComponent } from './inventory/products/products.component';
import { ReplenishmentsComponent } from './inventory/orders/replenishments/replenishments.component';
import { DeliveriesComponent } from './inventory/orders/deliveries/deliveries.component';
import { ScrapsComponent } from './inventory/orders/scraps/scraps.component';
import { WarehousesComponent } from './inventory/warehouses/warehouses.component';
import { WarehouseAddComponent } from './inventory/warehouses/warehouse-add/warehouse-add.component';
import { LocationAddComponent } from './inventory/locations/location-add/location-add.component';
import { LocationComponent } from './inventory/locations/location/location.component';
import { WarehouseComponent } from './inventory/warehouses/warehouse/warehouse.component';
import { AddressComponent } from './inventory/addresses/address/address.component';
import { AddressAddComponent } from './inventory/addresses/address-add/address-add.component';
import { ContactComponent } from './inventory/contacts/contact/contact.component';
import { ContactAddComponent } from './inventory/contacts/contact-add/contact-add.component';
import { CategoriesComponent } from './inventory/categories/categories.component';
import { WarehouseService } from './services/warehouse.service';
import { ScrapComponent } from './inventory/orders/scraps/scrap/scrap.component';
import { ScrapAddComponent } from './inventory/orders/scraps/scrap-add/scrap-add.component';
import { DetailCardComponent } from './shared/cards/detail-card/detail-card.component';
import { DetailActionComponent } from './shared/cards/detail-card/detail-action/detail-action.component';
import { DetailCardHeaderComponent } from './shared/cards/detail-card/detail-card-header/detail-card-header.component';
import { TextDetailsComponent } from './shared/text-details/text-details.component';
import { EditTextDetailsComponent } from './shared/edit-text-details/edit-text-details.component';
import { DetailSecondaryHeaderComponent } from './shared/cards/detail-card/detail-card-header/detail-secondary-header/detail-secondary-header.component';
import { ListCardComponent } from './shared/cards/list-card/list-card.component';
import { FormElementContainerComponent } from './shared/form-element-container/form-element-container.component';
import { ProcessCardComponent } from './shared/cards/process-card/process-card.component';
import { ScrapService } from './services/scrap.service';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ItemSelectComponent } from './shared/item-select/item-select.component';
import { ReplenishmentsAddComponent } from './inventory/orders/replenishments/replenishments-add/replenishments-add.component';
import { CreateProductDialog } from './shared/dialogs/create-item/create-product-dialog/create-product-dialog';
import { CreateLocationDialog } from './shared/dialogs/create-item/create-location-dialog/create-location-dialog';
import { AddCardComponent } from './shared/cards/add-card/add-card.component';
import { CategoryAddComponent } from './inventory/categories/category-add/category-add.component';
import { ReplenishmentComponent } from './inventory/orders/replenishments/replenishment/replenishment.component';
import { CreateCategoryDialog } from './shared/dialogs/create-item/create-category-dialog/create-category-dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryMenuComponent,
    MasterComponent,
    ProductComponent,
    CategoryComponent,
    CategoryAddComponent,
    ProductAddComponent,
    ErrorPageComponent,
    OrdersComponent,
    OrderAddComponent,
    LocationsComponent,
    ContactsComponent,
    ProductGeneralInfoComponent,
    ProductsComponent,
    ReplenishmentsComponent,
    DeliveriesComponent,
    ScrapsComponent,
    WarehousesComponent,
    WarehouseAddComponent,
    LocationAddComponent,
    LocationComponent,
    WarehouseComponent,
    AddressComponent,
    AddressAddComponent,
    ContactComponent,
    ContactAddComponent,
    CategoriesComponent,
    ScrapComponent,
    ScrapAddComponent,
    DetailCardComponent,
    DetailActionComponent,
    DetailCardHeaderComponent,
    TextDetailsComponent,
    EditTextDetailsComponent,
    DetailSecondaryHeaderComponent,
    ListCardComponent,
    FormElementContainerComponent,
    ProcessCardComponent,
    ManufacturingComponent,
    ItemSelectComponent,
    ReplenishmentsAddComponent,
    CreateProductDialog,
    CreateLocationDialog,
    AddCardComponent,
    ReplenishmentComponent,
    CreateCategoryDialog,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    InventoryRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ProductService,
    WarehouseService,
    ScrapService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
