import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodiumMenuPageRoutingModule } from './sodium-menu-routing.module';

import { SodiumMenuPage } from './sodium-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodiumMenuPageRoutingModule,
  ],
  declarations: [],
})
export class SodiumMenuPageModule {}
