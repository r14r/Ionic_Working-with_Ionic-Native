import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SSHConnectPage } from './sshconnect.page';

const routes: Routes = [
  {
    path: '',
    component: SSHConnectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SSHConnectPage]
})
export class SSHConnectPageModule {}
