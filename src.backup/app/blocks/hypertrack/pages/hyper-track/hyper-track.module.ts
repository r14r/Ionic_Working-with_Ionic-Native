import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HyperTrackPage } from './hyper-track.page';

const routes: Routes = [
  {
    path: '',
    component: HyperTrackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HyperTrackPage]
})
export class HyperTrackPageModule {}
