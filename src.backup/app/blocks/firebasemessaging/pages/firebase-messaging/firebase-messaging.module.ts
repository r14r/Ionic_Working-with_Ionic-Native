import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseMessagingPage } from './firebase-messaging.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseMessagingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseMessagingPage]
})
export class FirebaseMessagingPageModule {}
