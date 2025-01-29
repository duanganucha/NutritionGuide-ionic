import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientPageRoutingModule } from './ingredient-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientPageRoutingModule
  ],
  declarations: [ ]
})
export class IngredientPageModule {}
