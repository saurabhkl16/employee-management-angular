import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponents } from './create-employee';

describe('CreateEmployee', () => {
  let component: CreateEmployeeComponents;
  let fixture: ComponentFixture<CreateEmployeeComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeeComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
