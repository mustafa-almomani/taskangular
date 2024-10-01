import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuctrueComponent } from './luctrue.component';

describe('LuctrueComponent', () => {
  let component: LuctrueComponent;
  let fixture: ComponentFixture<LuctrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuctrueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuctrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
