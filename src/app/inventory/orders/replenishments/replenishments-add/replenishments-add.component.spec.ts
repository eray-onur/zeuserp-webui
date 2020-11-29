import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishmentsAddComponent } from './replenishments-add.component';

describe('ReplenishmentsAddComponent', () => {
  let component: ReplenishmentsAddComponent;
  let fixture: ComponentFixture<ReplenishmentsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplenishmentsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplenishmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
