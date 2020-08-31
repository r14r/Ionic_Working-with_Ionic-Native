import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Base64ToGalleryPage } from './base64-to-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: Base64ToGalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Base64ToGalleryPage]
})
export class Base64ToGalleryPageModule {}
