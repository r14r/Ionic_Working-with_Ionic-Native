import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FileEncryptionPage } from './file-encryption.page';

const routes: Routes = [
  {
    path: '',
    component: FileEncryptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FileEncryptionPage]
})
export class FileEncryptionPageModule {}
