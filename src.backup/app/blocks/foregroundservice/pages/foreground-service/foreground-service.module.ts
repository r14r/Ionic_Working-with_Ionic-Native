import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForegroundServicePage } from './foreground-service.page';

const routes: Routes = [
  {
    path: '',
    component: ForegroundServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForegroundServicePage]
})
export class ForegroundServicePageModule {}
