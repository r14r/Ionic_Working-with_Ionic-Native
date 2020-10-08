import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BluetoothLEPage } from './bluetooth-le.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothLEPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BluetoothLEPage]
})
export class BluetoothLEPageModule {}
