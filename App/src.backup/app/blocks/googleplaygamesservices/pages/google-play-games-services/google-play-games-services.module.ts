import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GooglePlayGamesServicesPage } from './google-play-games-services.page';

const routes: Routes = [
  {
    path: '',
    component: GooglePlayGamesServicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GooglePlayGamesServicesPage]
})
export class GooglePlayGamesServicesPageModule {}
