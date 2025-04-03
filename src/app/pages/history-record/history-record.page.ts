import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngufirestoreService } from 'src/app/services/angufirestore.service';

@Component({
  selector: 'app-history-record',
  templateUrl: './history-record.page.html',
  styleUrls: ['./history-record.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HistoryRecordPage implements OnInit {
  records: any[] = [];
  flattenedRecords: any[] = [];
  filteredRecords: any[] = [];

  searchText: string = ''; // 🔍 ค้นหาตามชื่อ
  selectedDate: string = ''; // 📅 ค้นหาตามวันที่

  totalSodiumSum: number = 0;

  constructor(private angufirestoreService: AngufirestoreService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.angufirestoreService.list('nurse_nutrition').subscribe((data: any) => {
      this.records = data;
      this.flattenedRecords = this.flattenData(data);
      this.filteredRecords = [...this.flattenedRecords.reverse()]; // ตั้งค่าเริ่มต้นให้แสดงทั้งหมด
      this.calculateTotalSodium();
    });
  }

  flattenData(data: any[]): any[] {
    let flattened: any[] = [];
    data.forEach((order) => {
      order.items.forEach((item: any) => {
        flattened.push({
          orderNumber: order.orderNumber,
          orderDate: order.orderDate,
          fullname: order.userData.firstName + ' ' + order.userData.lastName,
          telPhone: order.userData.telPhone,
          foodName: item.name,
          quantity: item.quantity,
          sodium: item.sodium,
          totalSodium: order.totalSodium,
        });
      });
    });
    return flattened;
  }

  filterRecords() {
    this.filteredRecords = this.flattenedRecords.filter((record) => {
      const matchesName = record.fullname
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const matchesDate = this.selectedDate
        ? record.orderDate === this.selectedDate
        : true;
      return matchesName && matchesDate;
    });
    this.calculateTotalSodium(); // อัปเดตรวม sodium ใหม่
  }

  calculateTotalSodium() {
    this.totalSodiumSum = this.filteredRecords.reduce(
      (sum, record) => sum + record.totalSodium,
      0
    );
  }

  clearFilter() {
    this.searchText = '';
    this.selectedDate = '';
    this.filteredRecords = [...this.flattenedRecords]; // รีเซ็ตข้อมูล
    this.calculateTotalSodium(); // อัปเดตรวม sodium ใหม่
  }

  // filterRecords() {
  //   this.filteredRecords = this.flattenedRecords.filter((record) =>
  //     record.fullname.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }
}
