import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafariViewControllerPage } from './safari-view-controller.page';

const routes: Routes = [
  {
    path: '',
    component: SafariViewControllerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SafariViewControllerPage]
})
export class SafariViewControllerPageModule {}
