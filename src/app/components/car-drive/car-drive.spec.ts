import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDrive } from './car-drive';

describe('CarDrive', () => {
  let component: CarDrive;
  let fixture: ComponentFixture<CarDrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDrive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
