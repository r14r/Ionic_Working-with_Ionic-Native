import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoLibraryPage } from './photo-library.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoLibraryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotoLibraryPage]
})
export class PhotoLibraryPageModule {}
