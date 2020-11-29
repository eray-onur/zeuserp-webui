// import { OrderReplenishment } from '../models/order-replenishment.model';
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
// export class OrderReplenishmentService {

//   replenishmentOrders: Array<OrderReplenishment>;

//   constructor() {
//     this.replenishmentOrders = new Array<OrderReplenishment>();
//     const exampleOrder: OrderReplenishment = {
//       id: 1,
//       productId: 1,
//       locationId: 1,
//       onHandQuantity: 1,
//       orderQuantity: 3,
//     };
//     const exampleOrderTwo: OrderReplenishment = {
//       id: 2,
//       productId: 1,
//       locationId: 1,
//       onHandQuantity: 1,
//       forecastedQuantity: 1,
//       minQuantity: 1,
//       maxQuantity: 13,
//       toOrder: 10,
//     };
//     const exampleOrderThree: OrderReplenishment = {
//       id: 3,
//       productId: 1,
//       locationId: 1,
//       onHandQuantity: 1,
//       minQuantity: 1,
//       maxQuantity: 28,
//       toOrder: 3,
//     };
//     const exampleOrderFour: OrderReplenishment = {
//       id: 4,
//       productId: 1,
//       locationId: 1,
//       onHandQuantity: 1,
//       minQuantity: 1,
//       maxQuantity: 5,
//       toOrder: 4,
//     };
//     this.replenishmentOrders.push(exampleOrder, exampleOrderTwo, exampleOrderThree, exampleOrderFour);
//   }

//   getAllProducts() : Array<ReplenishmentOrder> {
//     console.log(this.replenishmentOrders);
//     return this.replenishmentOrders;
//   }

//   getProductById(id: number) : ReplenishmentOrder {
//     console.log("Id is: " + id);
//     return this.replenishmentOrders.find(o => o.id === id);
//   }

//   add(order: ReplenishmentOrder) : void {
//     this.replenishmentOrders.push(order);
//     console.log("New index of products array is: ", this.replenishmentOrders.length);
//   }

// }
