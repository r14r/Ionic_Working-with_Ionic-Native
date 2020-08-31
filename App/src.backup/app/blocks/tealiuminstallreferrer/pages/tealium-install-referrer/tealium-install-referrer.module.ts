import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TealiumInstallReferrerPage } from './tealium-install-referrer.page';

const routes: Routes = [
  {
    path: '',
    component: TealiumInstallReferrerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TealiumInstallReferrerPage]
})
export class TealiumInstallReferrerPageModule {}
