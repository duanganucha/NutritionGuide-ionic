import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuPageRoutingModule } from './main-menu-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuPageRoutingModule,
    RouterModule,
  ],
  declarations: [],
})
export class MainMenuPageModule {}
