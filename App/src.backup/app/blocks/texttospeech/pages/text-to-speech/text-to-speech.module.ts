import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TextToSpeechPage } from './text-to-speech.page';

const routes: Routes = [
  {
    path: '',
    component: TextToSpeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TextToSpeechPage]
})
export class TextToSpeechPageModule {}
