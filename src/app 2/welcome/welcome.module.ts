import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WelcomePageRoutingModule],
  declarations: [],
})
export class WelcomePageModule {}
