import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class VideoPage {
  videos: { title: string; safeUrl: SafeResourceUrl }[];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      {
        title: 'ความรู้โรคความดันโลหิต',
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/zMbYH1SBHtc?si=3wrp2ZsGP5qM4Lty'
        ),
      },
      {
        title: 'วิธีอ่านฉลากโภชนาการ',
        safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/EGvLA3Qte60?si=gvfAO1XfeiQQPpnP'
        ),
      },
    ];
  }
}
