import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TealiumAdIdentifierPage } from './tealium-ad-identifier.page';

const routes: Routes = [
  {
    path: '',
    component: TealiumAdIdentifierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TealiumAdIdentifierPage]
})
export class TealiumAdIdentifierPageModule {}
