import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationAccuracyPage } from './location-accuracy.page';

const routes: Routes = [
  {
    path: '',
    component: LocationAccuracyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationAccuracyPage]
})
export class LocationAccuracyPageModule {}
