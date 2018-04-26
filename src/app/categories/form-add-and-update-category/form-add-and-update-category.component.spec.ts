import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAndUpdateCategoryComponent } from './form-add-and-update-category.component';

describe('FormAddAndUpdateCategoryComponent', () => {
  let component: FormAddAndUpdateCategoryComponent;
  let fixture: ComponentFixture<FormAddAndUpdateCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddAndUpdateCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAndUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
