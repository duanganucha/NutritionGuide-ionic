import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaloriesPage } from './calories.page';

describe('CaloriesPage', () => {
  let component: CaloriesPage;
  let fixture: ComponentFixture<CaloriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
