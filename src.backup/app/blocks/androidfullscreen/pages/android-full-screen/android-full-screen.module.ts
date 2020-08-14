import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AndroidFullScreenPage } from './android-full-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidFullScreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AndroidFullScreenPage]
})
export class AndroidFullScreenPageModule {}
