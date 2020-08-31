import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegulaDocumentReaderPage } from './regula-document-reader.page';

const routes: Routes = [
  {
    path: '',
    component: RegulaDocumentReaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegulaDocumentReaderPage]
})
export class RegulaDocumentReaderPageModule {}
