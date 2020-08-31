import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdMobPlusPage } from './ad-mob-plus.page';

const routes: Routes = [
  {
    path: '',
    component: AdMobPlusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdMobPlusPage]
})
export class AdMobPlusPageModule {}
