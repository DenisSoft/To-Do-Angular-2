import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateCategoryComponent } from './add-and-update-category.component';

describe('AddAndUpdateCategoryComponent', () => {
  let component: AddAndUpdateCategoryComponent;
  let fixture: ComponentFixture<AddAndUpdateCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAndUpdateCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
