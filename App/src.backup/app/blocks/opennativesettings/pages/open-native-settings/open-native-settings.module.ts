import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OpenNativeSettingsPage } from './open-native-settings.page';

const routes: Routes = [
  {
    path: '',
    component: OpenNativeSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OpenNativeSettingsPage]
})
export class OpenNativeSettingsPageModule {}
