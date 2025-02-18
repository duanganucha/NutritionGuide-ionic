import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoListPage } from './video-list.page';

describe('VideoListPage', () => {
  let component: VideoListPage;
  let fixture: ComponentFixture<VideoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
