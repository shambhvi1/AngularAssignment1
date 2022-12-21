import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManageFormComponent } from './product-manage-form.component';

describe('ProductManageFormComponent', () => {
  let component: ProductManageFormComponent;
  let fixture: ComponentFixture<ProductManageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductManageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
