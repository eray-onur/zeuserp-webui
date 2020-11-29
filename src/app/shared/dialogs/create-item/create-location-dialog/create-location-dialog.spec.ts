import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationDialog } from './create-location-dialog';

describe('CreateLocationDialog', () => {
  let component: CreateLocationDialog;
  let fixture: ComponentFixture<CreateLocationDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocationDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
