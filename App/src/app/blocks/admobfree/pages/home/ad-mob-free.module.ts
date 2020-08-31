import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdMobFreePage } from './ad-mob-free.page';

const routes: Routes = [
  {
    path: '',
    component: AdMobFreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdMobFreePage]
})
export class AdMobFreePageModule {}
