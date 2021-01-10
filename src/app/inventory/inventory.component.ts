import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  opened: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url) {
    this.router.navigate(url);
  }

}
