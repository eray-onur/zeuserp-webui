
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orders : Array<Order>;

  orderForm = new FormGroup({
    operationType: new FormControl("", Validators.required),
    code: new FormControl(""),
    // TODO: Solve enum issue and make it work with select. Implement select for 'Type of Operation'
    //
    warehouse: new FormControl(""),
    defaultSource: new FormControl(),
    defaultDestination: new FormControl(),
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const orderId = params["id"];
      console.log(orderId);
      if(orderId != null) {


        //this.orderForm.get("operationType").setValue(order.operationType)
        // TODO: Fetch image from server to the product image.
      }
    })
  }

  onOrderFormSubmit() : void {

  }

}
