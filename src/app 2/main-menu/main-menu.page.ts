import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonIcon } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class MainMenuPage implements OnInit {
  menuItems = [
    {
      title: 'คำนวณ BMI และแคลอรี่',
      description: 'คำนวณค่าดัชนีมวลกาย',
      route: '/cal-bmi',
      icon: 'fitness',
      color: '#4CAF50', // สีเขียว
    },
    {
      title: 'วิธีให้ความรู้',
      description: 'แหล่งความรู้และคำแนะนำ',
      route: '/video-list',
      icon: 'videocam',
      color: '#2196F3', // สีฟ้า
    },
    {
      title: 'เมนูอาหารลดโซเดียม',
      description: 'เมนูอาหารเพื่อสุขภาพ',
      route: '/menu',
      icon: 'restaurant',
      color: '#FF9800', // สีส้ม
    },
    {
      title: 'ปริมาณโซเดียม',
      description: 'ข้อมูลปริมาณโซเดียม',
      route: '/sodium-menu',
      icon: 'nuclear-outline',
      color: '#E91E63', // สีชมพู
    },
    {
      title: 'ตารางเมนูทีเลือก',
      description: 'บันทึกและติดตามผล',
      route: '/cart',
      icon: 'star',
      color: '#1027B0', // สีม่วง
    },
    {
      title: 'ตารางบันทึกผล',
      description: 'บันทึกและติดตามผล',
      route: '/records',
      icon: 'document',
      color: '#9C27B0', // สีม่วง
    },

    {
      title: 'สิ้นสุดการใช้งาน',
      description: 'ออกจากระบบ',
      route: '/',
      icon: 'exit-outline',
      color: '#FF0000', // สีแดง
    },
  ];

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
