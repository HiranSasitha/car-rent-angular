import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMaterialComponent } from './customer-material.component';

describe('CustomerMaterialComponent', () => {
  let component: CustomerMaterialComponent;
  let fixture: ComponentFixture<CustomerMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
