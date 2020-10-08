import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeychainTouchIdPage } from './keychain-touch-id.page';

const routes: Routes = [
  {
    path: '',
    component: KeychainTouchIdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeychainTouchIdPage]
})
export class KeychainTouchIdPageModule {}
