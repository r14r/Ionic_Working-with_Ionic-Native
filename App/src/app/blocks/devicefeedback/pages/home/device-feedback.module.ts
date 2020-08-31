import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceFeedbackPage } from './device-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceFeedbackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceFeedbackPage]
})
export class DeviceFeedbackPageModule {}
