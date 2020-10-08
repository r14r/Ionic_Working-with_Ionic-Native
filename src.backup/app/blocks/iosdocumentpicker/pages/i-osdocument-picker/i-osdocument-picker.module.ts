import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IOSDocumentPickerPage } from './i-osdocument-picker.page';

const routes: Routes = [
  {
    path: '',
    component: IOSDocumentPickerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IOSDocumentPickerPage]
})
export class IOSDocumentPickerPageModule {}
