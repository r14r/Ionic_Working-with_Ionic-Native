import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuikklyPluginPage } from './quikkly-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: QuikklyPluginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuikklyPluginPage]
})
export class QuikklyPluginPageModule {}
