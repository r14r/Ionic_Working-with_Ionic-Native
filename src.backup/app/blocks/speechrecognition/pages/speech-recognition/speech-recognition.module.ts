import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpeechRecognitionPage } from './speech-recognition.page';

const routes: Routes = [
  {
    path: '',
    component: SpeechRecognitionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpeechRecognitionPage]
})
export class SpeechRecognitionPageModule {}
