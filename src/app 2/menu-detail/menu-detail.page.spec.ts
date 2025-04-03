import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDetailPage } from './menu-detail.page';

describe('MenuDetailPage', () => {
  let component: MenuDetailPage;
  let fixture: ComponentFixture<MenuDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
