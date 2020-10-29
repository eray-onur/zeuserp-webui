import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddDialog } from './product-add.dialog';

describe('ProductAddComponent', () => {
  let component: ProductAddDialog;
  let fixture: ComponentFixture<ProductAddDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
