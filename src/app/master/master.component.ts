import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface navItem {
  [key: string]: any;
} 

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  tileStyle: object = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'box-sizing': 'border-box',
    'margin': '0.1rem',
    'padding': '0',
    'width': '10rem',
    'height': '10rem',
  }

  modules: Array<navItem> = [
    { 
      'name': 'Contacts',
      'iconName': 'supervised_user_circle',
      'navigation': () => this.navigateToContacts(),
    },
    { 
      'name': 'Inventory',
      'iconName': 'storage',
      'navigation': () => this.navigateToInv(),
    },
    { 
      'name': 'Manufacturing',
      'iconName': 'edit',
      'navigation': () => this.navigateToManu(),
    },
    { 
      'name': 'PLM',
      'iconName': 'edit',
      'navigation': () => this.navigateToPLM(),
    },
    { 
      'name': 'Account',
      'iconName': 'contacts',
      'navigation': () => this.navigateToInv(),
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToInv(): void {
    this.router.navigate(['/', 'inventory']);
  }

  navigateToManu(): void {
    this.router.navigate(['/', 'manufacturing']);
  }

  navigateToPLM(): void {
    this.router.navigate(['/', 'plm']);
  }

  navigateToContacts(): void {
    this.router.navigate(['/', 'inventory','contacts']);
  }

}
