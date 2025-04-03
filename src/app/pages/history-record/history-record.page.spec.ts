import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryRecordPage } from './history-record.page';

describe('HistoryRecordPage', () => {
  let component: HistoryRecordPage;
  let fixture: ComponentFixture<HistoryRecordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
