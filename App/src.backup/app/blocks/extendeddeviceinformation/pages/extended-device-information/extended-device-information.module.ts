import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtendedDeviceInformationPage } from './extended-device-information.page';

const routes: Routes = [
  {
    path: '',
    component: ExtendedDeviceInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtendedDeviceInformationPage]
})
export class ExtendedDeviceInformationPageModule {}
