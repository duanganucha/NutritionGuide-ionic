import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryRecordPage } from './history-record.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRecordPageRoutingModule {}
