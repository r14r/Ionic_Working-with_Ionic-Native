import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicWebviewPage } from './ionic-webview.page';

const routes: Routes = [
  {
    path: '',
    component: IonicWebviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonicWebviewPage]
})
export class IonicWebviewPageModule {}
