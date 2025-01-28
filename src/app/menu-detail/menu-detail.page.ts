import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuItem } from '../models/menu.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class MenuDetailPage implements OnInit {
  selectedItem: MenuItem | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedItem = history.state.selectedItem;
    if (!this.selectedItem) {
      // Programmatically navigate back to menu page if no item selected
      this.router.navigate(['/menu']);
    }
  }

  getName(name: any) {
    var a = "menu/" + name + ".png";
    console.log(a);
    return "menu/" + name + ".png";
  }
}
