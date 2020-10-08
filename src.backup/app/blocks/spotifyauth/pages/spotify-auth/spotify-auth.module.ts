import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpotifyAuthPage } from './spotify-auth.page';

const routes: Routes = [
  {
    path: '',
    component: SpotifyAuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpotifyAuthPage]
})
export class SpotifyAuthPageModule {}
