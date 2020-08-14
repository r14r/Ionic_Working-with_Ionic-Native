import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FullScreenImagePage } from './full-screen-image.page';

const routes: Routes = [
  {
    path: '',
    component: FullScreenImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FullScreenImagePage]
})
export class FullScreenImagePageModule {}
