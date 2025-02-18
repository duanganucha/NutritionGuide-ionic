import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalBmiPage } from './cal-bmi.page';

const routes: Routes = [
  {
    path: '',
    component: CalBmiPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalBmiPageRoutingModule {}
