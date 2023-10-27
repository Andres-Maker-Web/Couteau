import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetNamePage } from './det-name.page';

const routes: Routes = [
  {
    path: '',
    component: DetNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetNamePageRoutingModule {}
