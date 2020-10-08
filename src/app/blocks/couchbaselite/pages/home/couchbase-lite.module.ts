import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CouchbaseLitePage } from './couchbase-lite.page';

const routes: Routes = [
  {
    path: '',
    component: CouchbaseLitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CouchbaseLitePage]
})
export class CouchbaseLitePageModule {}
