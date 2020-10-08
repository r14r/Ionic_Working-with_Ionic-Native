import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SQLitePorterPage } from './sqlite-porter.page';

const routes: Routes = [
  {
    path: '',
    component: SQLitePorterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SQLitePorterPage]
})
export class SQLitePorterPageModule {}
