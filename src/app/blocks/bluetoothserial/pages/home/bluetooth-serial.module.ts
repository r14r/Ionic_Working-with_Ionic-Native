import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BluetoothSerialPage } from './bluetooth-serial.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothSerialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BluetoothSerialPage]
})
export class BluetoothSerialPageModule {}
