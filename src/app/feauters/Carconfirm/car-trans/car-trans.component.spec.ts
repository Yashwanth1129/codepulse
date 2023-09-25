import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTransComponent } from './car-trans.component';

describe('CarTransComponent', () => {
  let component: CarTransComponent;
  let fixture: ComponentFixture<CarTransComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarTransComponent]
    });
    fixture = TestBed.createComponent(CarTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
