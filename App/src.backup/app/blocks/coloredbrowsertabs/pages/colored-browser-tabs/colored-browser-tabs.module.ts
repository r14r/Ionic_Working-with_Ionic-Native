import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColoredBrowserTabsPage } from './colored-browser-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ColoredBrowserTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColoredBrowserTabsPage]
})
export class ColoredBrowserTabsPageModule {}
