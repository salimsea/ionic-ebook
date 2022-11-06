import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LokasiPageRoutingModule } from './lokasi-routing.module';

import { LokasiPage } from './lokasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LokasiPageRoutingModule
  ],
  declarations: [LokasiPage]
})
export class LokasiPageModule {}
