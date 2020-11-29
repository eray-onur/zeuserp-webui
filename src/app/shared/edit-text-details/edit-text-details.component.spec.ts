import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextDetailsComponent } from './edit-text-details.component';

describe('EditTextDetailsComponent', () => {
  let component: EditTextDetailsComponent;
  let fixture: ComponentFixture<EditTextDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTextDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
