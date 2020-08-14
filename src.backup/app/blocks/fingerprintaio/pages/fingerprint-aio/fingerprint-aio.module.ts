import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FingerprintAIOPage } from './fingerprint-aio.page';

const routes: Routes = [
  {
    path: '',
    component: FingerprintAIOPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FingerprintAIOPage]
})
export class FingerprintAIOPageModule {}
