import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuItem } from '../models/menu.model';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [MenuService], // Add MenuService as provider
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  categories: any[] = []; // Replace 'any' with MenuCategory[] once model is available
  selectedMenuItem: MenuItem | null = null;

  constructor(private menuService: MenuService, private router: Router) {
    this.menuService.selectedMenuItem$.subscribe(
      (item) => (this.selectedMenuItem = item)
    );
  }

  ngOnInit() {
    this.categories = this.menuService.getCategories();
  }

  onMenuSelected(item: MenuItem) {
    this.menuService.selectMenuItem(item);
  }

  onViewMemuDetail(item: MenuItem) {
    this.router.navigate(['/menu-detail'], { state: { selectedItem: item } });
  }

  getName(name: any) {
    var a = 'menu/' + name + '.png';
    console.log(a);
    return 'menu/' + name + '.png';
  }

  navigateCarPage() {
    console.log('navigateCarPage');
    this.router.navigate(['/cart']);
  }

  goCartPage() {
    this.router.navigate(['cart']);
  }
}
