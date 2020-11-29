import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.scss']
})
export class WarehouseAddComponent implements OnInit {

  @ViewChild("btnsubmit", { static: false, read: ElementRef }) 
  btnSubmit: ElementRef;

  warehouseForm = new FormGroup({
    warehouseCode: new FormControl("", Validators.required),
    warehouseName: new FormControl("", Validators.required),
    hasLimitedStockCount: new FormControl(false)
  });

  constructor(private route: ActivatedRoute, private router: Router, private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe(params => {
        const warehouseId = +params["id"];
        if(warehouseId != null) {
          const warehouse = this.warehouseService.getWarehouseById(warehouseId);
  
          console.log(this.warehouseService.getWarehouseById(warehouseId));
          this.warehouseForm.get("warehouseCode").setValue(warehouse.warehouseCode);
          this.warehouseForm.get("warehouseName").setValue(warehouse.name);
          this.warehouseForm.get("hasLimitedStockCount").setValue(warehouse.hasLimitedStockCount);

          // TODO: Fetch image from server to the product image.
          //
          this.btnSubmit.nativeElement.innerText = "Save"
        }
      });
    }, 0);
  }

  onSubmitForm(): void {
    console.warn(this.warehouseForm.value);
    if(this.warehouseForm.valid) {
      const warehouseToAdd: Warehouse = {
        name: this.warehouseForm.get("warehouseName").value,
        warehouseCode: this.warehouseForm.get("warehouseCode").value,
        hasLimitedStockCount: this.warehouseForm.get("hasLimitedStockCount").value,
      }
      this.warehouseService.add(warehouseToAdd);
      this.router.navigate(["/", "inventory", "warehouses"]);
    }
  }

}
