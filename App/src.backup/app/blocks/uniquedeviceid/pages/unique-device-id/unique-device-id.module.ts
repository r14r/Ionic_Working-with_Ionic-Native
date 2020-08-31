import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UniqueDeviceIDPage } from './unique-device-id.page';

const routes: Routes = [
  {
    path: '',
    component: UniqueDeviceIDPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UniqueDeviceIDPage]
})
export class UniqueDeviceIDPageModule {}
