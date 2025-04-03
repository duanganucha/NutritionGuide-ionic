import { Component, OnInit } from '@angular/core';
import { AngufirestoreService } from '../services/angufirestore.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserData } from '../pages/cart/cart.page';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class RecordsPage implements OnInit {
  records: any = [];
  loading: boolean = false;
  userData: UserData | null = null;
  constructor(private angufirestoreService: AngufirestoreService) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadRecords(telPhone: string) {
    this.loading = true;
    this.angufirestoreService
      .listFilter('nurse_nutrition', telPhone)
      .subscribe((records: any) => {
        this.records = records;
        console.log(records);
        this.loading = false;
      });
  }
  loadUserData() {
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      try {
        this.userData = JSON.parse(userDataStr);
        console.log(this.userData);
        this.loadRecords(this.userData!.telPhone);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }
}
