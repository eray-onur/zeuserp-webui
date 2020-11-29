import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryDialog } from './create-category-dialog';

describe('CreateCategoryDialog', () => {
  let component: CreateCategoryDialog;
  let fixture: ComponentFixture<CreateCategoryDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
