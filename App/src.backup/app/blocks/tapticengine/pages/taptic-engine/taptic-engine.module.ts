import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TapticEnginePage } from './taptic-engine.page';

const routes: Routes = [
  {
    path: '',
    component: TapticEnginePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TapticEnginePage]
})
export class TapticEnginePageModule {}
