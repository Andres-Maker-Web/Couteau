import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetNamePageRoutingModule } from './det-name-routing.module';

import { DetNamePage } from './det-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetNamePageRoutingModule
  ],
  declarations: [DetNamePage]
})
export class DetNamePageModule {}
