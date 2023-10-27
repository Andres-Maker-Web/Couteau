import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetGenderPage } from './det-gender.page';

const routes: Routes = [
  {
    path: '',
    component: DetGenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetGenderPageRoutingModule {}
