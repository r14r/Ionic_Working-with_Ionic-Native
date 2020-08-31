import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseCrashlyticsPage } from './firebase-crashlytics.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseCrashlyticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseCrashlyticsPage]
})
export class FirebaseCrashlyticsPageModule {}
