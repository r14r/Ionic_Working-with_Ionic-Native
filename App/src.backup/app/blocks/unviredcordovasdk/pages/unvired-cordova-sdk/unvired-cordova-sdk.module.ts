import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnviredCordovaSDKPage } from './unvired-cordova-sdk.page';

const routes: Routes = [
  {
    path: '',
    component: UnviredCordovaSDKPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnviredCordovaSDKPage]
})
export class UnviredCordovaSDKPageModule {}
