import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NativeGeocoderPage } from './native-geocoder.page';

const routes: Routes = [
  {
    path: '',
    component: NativeGeocoderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NativeGeocoderPage]
})
export class NativeGeocoderPageModule {}
