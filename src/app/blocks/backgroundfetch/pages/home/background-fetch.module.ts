import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackgroundFetchPage } from './background-fetch.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundFetchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BackgroundFetchPage]
})
export class BackgroundFetchPageModule {}
