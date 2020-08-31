import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobileAccessibilityPage } from './mobile-accessibility.page';

const routes: Routes = [
  {
    path: '',
    component: MobileAccessibilityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobileAccessibilityPage]
})
export class MobileAccessibilityPageModule {}
