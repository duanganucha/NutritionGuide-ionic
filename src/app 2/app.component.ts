import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'ลงทะเบียน', url: '/', icon: 'fitness' }, // Changed to fitness icon
    { title: 'หน้าหลัก', url: '/main-menu', icon: 'fitness' }, // Changed to fitness icon
    { title: 'คำนวณแคลอรี่', url: '/calories', icon: 'flame' }, // Changed to flame icon for calories
    { title: 'คำนวณ Bmi', url: '/cal-bmi', icon: 'fitness' }, // Changed to fitness icon
    { title: 'เมนูอาหาร', url: '/menu', icon: 'restaurant' }, // Changed to restaurant icon
    { title: 'ส่วนประกอบอาหาร', url: '/sodium-menu', icon: 'nutrition' }, // Changed to nutrition icon
    { title: 'วิดีโอความรู้', url: 'video/1', icon: 'videocam' }, // Changed to video camera icon
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
