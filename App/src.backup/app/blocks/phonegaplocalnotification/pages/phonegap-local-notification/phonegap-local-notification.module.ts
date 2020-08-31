import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhonegapLocalNotificationPage } from './phonegap-local-notification.page';

const routes: Routes = [
  {
    path: '',
    component: PhonegapLocalNotificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhonegapLocalNotificationPage]
})
export class PhonegapLocalNotificationPageModule {}
