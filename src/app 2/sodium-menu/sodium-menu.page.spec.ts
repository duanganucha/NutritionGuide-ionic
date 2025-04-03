import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SodiumMenuPage } from './sodium-menu.page';

describe('SodiumMenuPage', () => {
  let component: SodiumMenuPage;
  let fixture: ComponentFixture<SodiumMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SodiumMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
