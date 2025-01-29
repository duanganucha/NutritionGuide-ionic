import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.page.html',
  styleUrls: ['./calories.page.scss'],

  imports: [CommonModule, IonicModule, FormsModule],
})
export class CaloriesPage {
  gender: 'male' | 'female' = 'male';
  age: number = 25;
  weight: number = 70;
  height: number = 170;
  activityLevel: number = 1.2;
  calories: number = 0;

  calculateCalories() {
    if (this.age && this.weight && this.height) {
      // Harris-Benedict Equation
      let bmr = 0;
      if (this.gender === 'male') {
        bmr =
          88.362 +
          13.397 * this.weight +
          4.799 * this.height -
          5.677 * this.age;
      } else {
        bmr =
          447.593 + 9.247 * this.weight + 3.098 * this.height - 4.33 * this.age;
      }
      this.calories = bmr * this.activityLevel;
    }
  }
}
