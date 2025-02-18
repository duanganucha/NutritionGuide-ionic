import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalBmiPageRoutingModule } from './cal-bmi-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalBmiPageRoutingModule],
})
export class CalBmiPageModule {}
