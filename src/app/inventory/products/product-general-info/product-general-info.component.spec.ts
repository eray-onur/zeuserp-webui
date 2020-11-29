import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGeneralInfoComponent } from './product-general-info.component';

describe('ProductGeneralInfoComponent', () => {
  let component: ProductGeneralInfoComponent;
  let fixture: ComponentFixture<ProductGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
