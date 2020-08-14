import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WheelSelectorPluginPage } from './wheel-selector-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: WheelSelectorPluginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WheelSelectorPluginPage]
})
export class WheelSelectorPluginPageModule {}
