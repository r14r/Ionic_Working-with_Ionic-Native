import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NativeRingtonesPage } from './native-ringtones.page';

const routes: Routes = [
  {
    path: '',
    component: NativeRingtonesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NativeRingtonesPage]
})
export class NativeRingtonesPageModule {}
