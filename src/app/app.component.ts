import { Component } from '@angular/core';
import { BacaPage } from './baca/baca.page';
import { FavoritPage } from './favorit/favorit.page';
import { HomePage } from './home/home.page';
import { LokasiPage } from './lokasi/lokasi.page';
import { VersiPage } from './versi/versi.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', Component:HomePage, icon: 'home' },
    { title: 'Favorit', url: '/favorit', Component:FavoritPage, icon: 'heart' },
    { title: 'Baca Terbaru', url: '/baca', Component:BacaPage, icon: 'document' },
    { title: 'Lokasi', url: '/lokasi', Component:LokasiPage, icon: 'navigate' },
    { title: 'Versi', url: '/versi', Component:VersiPage, icon: 'information' },
  ];
  constructor() {}
}
