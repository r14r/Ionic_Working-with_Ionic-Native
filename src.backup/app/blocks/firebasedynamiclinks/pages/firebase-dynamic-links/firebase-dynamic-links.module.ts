import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseDynamicLinksPage } from './firebase-dynamic-links.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseDynamicLinksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseDynamicLinksPage]
})
export class FirebaseDynamicLinksPageModule {}
