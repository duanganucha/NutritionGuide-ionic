import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sodium-menu',
  templateUrl: './sodium-menu.page.html',
  styleUrls: ['./sodium-menu.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class SodiumMenuPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToDetail(type: string) {
    this.router.navigate(['/ingredient', type]);
  }
  navigateCarPage() {
    console.log('navigateCarPage');
    this.router.navigate(['/cart']);
  }
}
