import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotCodePushPage } from './hot-code-push.page';

const routes: Routes = [
  {
    path: '',
    component: HotCodePushPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotCodePushPage]
})
export class HotCodePushPageModule {}
