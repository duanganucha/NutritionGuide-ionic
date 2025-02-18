import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class WelcomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  menuPage() {
    // Navigate to welcome page after login
    this.router.navigate(['/register']);
  }
}
