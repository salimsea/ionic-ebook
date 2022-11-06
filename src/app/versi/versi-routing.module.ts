import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersiPage } from './versi.page';

const routes: Routes = [
  {
    path: '',
    component: VersiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersiPageRoutingModule {}
