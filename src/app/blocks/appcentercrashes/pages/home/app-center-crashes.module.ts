import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppCenterCrashesPage } from './app-center-crashes.page';

const routes: Routes = [
  {
    path: '',
    component: AppCenterCrashesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppCenterCrashesPage]
})
export class AppCenterCrashesPageModule {}
