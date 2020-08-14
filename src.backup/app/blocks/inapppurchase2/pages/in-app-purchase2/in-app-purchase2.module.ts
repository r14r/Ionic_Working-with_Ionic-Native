import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InAppPurchase2Page } from './in-app-purchase2.page';

const routes: Routes = [
  {
    path: '',
    component: InAppPurchase2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InAppPurchase2Page]
})
export class InAppPurchase2PageModule {}
