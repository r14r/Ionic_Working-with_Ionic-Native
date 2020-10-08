import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AndroidPermissionsPage } from './android-permissions.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidPermissionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AndroidPermissionsPage]
})
export class AndroidPermissionsPageModule {}
