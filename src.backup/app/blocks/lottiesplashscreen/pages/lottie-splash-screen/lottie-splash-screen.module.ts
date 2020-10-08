import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LottieSplashScreenPage } from './lottie-splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LottieSplashScreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LottieSplashScreenPage]
})
export class LottieSplashScreenPageModule {}
