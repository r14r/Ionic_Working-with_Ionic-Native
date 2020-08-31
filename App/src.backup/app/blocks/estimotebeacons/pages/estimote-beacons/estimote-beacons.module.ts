import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstimoteBeaconsPage } from './estimote-beacons.page';

const routes: Routes = [
  {
    path: '',
    component: EstimoteBeaconsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstimoteBeaconsPage]
})
export class EstimoteBeaconsPageModule {}
