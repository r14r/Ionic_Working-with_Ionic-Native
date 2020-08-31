import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackgroundGeolocationPage } from './background-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundGeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BackgroundGeolocationPage]
})
export class BackgroundGeolocationPageModule {}
