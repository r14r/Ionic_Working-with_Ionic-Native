import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AndroidFingerprintAuthPage } from './android-fingerprint-auth.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidFingerprintAuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AndroidFingerprintAuthPage]
})
export class AndroidFingerprintAuthPageModule {}
