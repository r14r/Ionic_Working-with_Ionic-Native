import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoogleAnalyticsPage } from './google-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleAnalyticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoogleAnalyticsPage]
})
export class GoogleAnalyticsPageModule {}
