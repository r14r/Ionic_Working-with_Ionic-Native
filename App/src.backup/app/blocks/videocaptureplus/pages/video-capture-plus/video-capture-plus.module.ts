import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoCapturePlusPage } from './video-capture-plus.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCapturePlusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoCapturePlusPage]
})
export class VideoCapturePlusPageModule {}
