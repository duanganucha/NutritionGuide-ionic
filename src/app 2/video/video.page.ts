import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class VideoPage {
  videos: { title: string; safeUrl: SafeResourceUrl }[];
  video: { title: string; safeUrl: SafeResourceUrl } | undefined;

  type: string = '';

  ngOnInit() {
    const paramType = this.route.snapshot.paramMap.get('type');
    if (paramType) {
      this.type = paramType;
      console.log(this.type);
      if (this.type == '1') {
        this.video = this.videos[0];
      } else {
        this.video = this.videos[1];
      }
    }
  }

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
  goNext() {
    this.router.navigate(['/video/2']);
  }
  goMain() {
    this.router.navigate(['/main-menu']);
  }
}
