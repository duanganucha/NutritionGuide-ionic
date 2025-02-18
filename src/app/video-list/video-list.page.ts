import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class VideoListPage implements OnInit {
  videoList = [
    {
      id: 1,
      title: 'วีดีโอให้ความรู้โรคความดันโลหิต',
      route: '/video/1',
    },
    {
      id: 2,
      title: 'วีดีโอให้ความรู้วิธีอ่านฉลากโภชนาการ',
      route: '/video/2',
    },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToVideo(route: string): void {
    this.router.navigate([route]);
  }
}
