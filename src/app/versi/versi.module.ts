import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersiPageRoutingModule } from './versi-routing.module';

import { VersiPage } from './versi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersiPageRoutingModule
  ],
  declarations: [VersiPage]
})
export class VersiPageModule {}
