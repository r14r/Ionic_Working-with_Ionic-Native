import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalyticsFirebasePage } from './analytics-firebase.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsFirebasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalyticsFirebasePage]
})
export class AnalyticsFirebasePageModule {}
