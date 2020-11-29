import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapAddComponent } from './scrap-add.component';

describe('ScrapAddComponent', () => {
  let component: ScrapAddComponent;
  let fixture: ComponentFixture<ScrapAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrapAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
