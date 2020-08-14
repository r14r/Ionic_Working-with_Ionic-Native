import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ABBYYPage } from './abbyy.page';

const routes: Routes = [{ path: '', component: ABBYYPage }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [ABBYYPage]
})
export class ABBYYPageModule { }
