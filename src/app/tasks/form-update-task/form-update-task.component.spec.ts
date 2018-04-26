import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTaskComponent } from './form-update-task.component';

describe('FormUpdateTaskComponent', () => {
  let component: FormUpdateTaskComponent;
  let fixture: ComponentFixture<FormUpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
