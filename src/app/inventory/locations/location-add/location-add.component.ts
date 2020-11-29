import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/models/location.model';
import { LocationService } from 'src/app/services/location.service';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.scss']
})
export class LocationAddComponent implements OnInit {

  @ViewChild("btnSubmit", { static: false, read: ElementRef }) 
  btnSubmit: ElementRef;

  showDetails: boolean = true;

  location: Location;
  locationForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService, private formBuilder: FormBuilder) { 
      
  }

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      name: new FormControl("", Validators.required),
      locationCode: new FormControl("", Validators.required),
      isInternal: new FormControl(false),
      isScrapLocation: new FormControl(false),
      isReturnLocation: new FormControl(false),
  });
    setTimeout(() => {
      this.route.params.subscribe(params => {
        let locationId = params["id"];
        console.log("[location-add] param is: " + locationId);
        if(locationId !== undefined) {
          locationId = Number(locationId);
          this.location = this.locationService.getById(locationId);
          console.log(this.locationService.getById(locationId));

          this.locationForm.get("name").setValue(this.location.name);
          this.locationForm.get("locationCode").setValue(this.location.locationCode);
          this.locationForm.get("isInternal").setValue(this.location.isInternal);
          this.locationForm.get("isScrapLocation").setValue(this.location.isScrap);
          this.locationForm.get("isReturnLocation").setValue(this.location.isReturn);
          // TODO: Fetch image from server to the product image.
          //
          this.btnSubmit.nativeElement.innerText = "Save"
        }
      });
    }, 0);
  }

  onSubmitForm(): void {
    console.warn(this.locationForm.value);
    if(this.locationForm.valid) {
      const locToAdd: Location = {
        name: this.locationForm.get("name").value,
        locationCode: this.locationForm.get("locationCode").value,
        isInternal: this.locationForm.get("isInternal").value,
        isScrap: this.locationForm.get("isScrap").value,
        isReturn: this.locationForm.get("isReturn").value,
        locationTypeId: 1,
      }
      this.locationService.add(locToAdd);
      this.router.navigate(["/", "inventory", "warehouses"]);
    }
  }

  onSubmit() {

  }

  onDiscard() {

  }

}
