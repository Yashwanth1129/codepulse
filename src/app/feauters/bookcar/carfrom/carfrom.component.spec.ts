import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfromComponent } from './carfrom.component';

describe('CarfromComponent', () => {
  let component: CarfromComponent;
  let fixture: ComponentFixture<CarfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarfromComponent]
    });
    fixture = TestBed.createComponent(CarfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
