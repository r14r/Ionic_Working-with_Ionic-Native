import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BiometricWrapperPage } from './biometric-wrapper.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricWrapperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BiometricWrapperPage]
})
export class BiometricWrapperPageModule {}
