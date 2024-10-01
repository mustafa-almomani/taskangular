import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetalisComponent } from './productdetalis.component';

describe('ProductdetalisComponent', () => {
  let component: ProductdetalisComponent;
  let fixture: ComponentFixture<ProductdetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdetalisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
