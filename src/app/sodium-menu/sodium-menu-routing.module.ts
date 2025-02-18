import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodiumMenuPage } from './sodium-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SodiumMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodiumMenuPageRoutingModule {}
