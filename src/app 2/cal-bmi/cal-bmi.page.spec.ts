import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalBmiPage } from './cal-bmi.page';

describe('CalBmiPage', () => {
  let component: CalBmiPage;
  let fixture: ComponentFixture<CalBmiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalBmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
