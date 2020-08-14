import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NetworkInterfacePage } from './network-interface.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkInterfacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NetworkInterfacePage]
})
export class NetworkInterfacePageModule {}
