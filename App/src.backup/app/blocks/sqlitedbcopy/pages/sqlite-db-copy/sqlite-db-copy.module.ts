import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SqliteDbCopyPage } from './sqlite-db-copy.page';

const routes: Routes = [
  {
    path: '',
    component: SqliteDbCopyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SqliteDbCopyPage]
})
export class SqliteDbCopyPageModule {}
