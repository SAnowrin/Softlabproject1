import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCartComponent } from './demo-cart.component';

describe('DemoCartComponent', () => {
  let component: DemoCartComponent;
  let fixture: ComponentFixture<DemoCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoCartComponent]
    });
    fixture = TestBed.createComponent(DemoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
