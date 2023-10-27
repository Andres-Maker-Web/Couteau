import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetGenderPageRoutingModule } from './det-gender-routing.module';

import { DetGenderPage } from './det-gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetGenderPageRoutingModule
  ],
  declarations: [DetGenderPage]
})
export class DetGenderPageModule {}
