import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UrbanAirShipPage } from './urban-air-ship.page';

const routes: Routes = [
  {
    path: '',
    component: UrbanAirShipPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UrbanAirShipPage]
})
export class UrbanAirShipPageModule {}
