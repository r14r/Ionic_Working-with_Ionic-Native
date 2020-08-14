import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviewAnyFilePage } from './preview-any-file.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewAnyFilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreviewAnyFilePage]
})
export class PreviewAnyFilePageModule {}
