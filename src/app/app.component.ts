import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'คำนวณ Bmi', url: '/cal-bmi', icon: 'fitness' }, // Changed to fitness icon
    { title: 'เมนูอาหาร', url: '/menu', icon: 'restaurant' }, // Changed to restaurant icon
    { title: 'ส่วนประกอบอาหาร', url: '/ingredient', icon: 'nutrition' }, // Changed to nutrition icon
    { title: 'วิดีโอความรู้', url: '/video', icon: 'videocam' }, // Changed to video camera icon
    { title: 'คำนวณแคลอรี่', url: '/calories', icon: 'flame' }, // Changed to flame icon for calories
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
