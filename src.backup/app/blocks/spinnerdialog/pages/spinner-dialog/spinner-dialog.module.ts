import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpinnerDialogPage } from './spinner-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: SpinnerDialogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpinnerDialogPage]
})
export class SpinnerDialogPageModule {}
