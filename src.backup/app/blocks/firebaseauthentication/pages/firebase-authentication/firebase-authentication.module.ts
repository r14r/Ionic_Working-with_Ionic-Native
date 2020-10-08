import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseAuthenticationPage } from './firebase-authentication.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseAuthenticationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseAuthenticationPage]
})
export class FirebaseAuthenticationPageModule {}
