import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'favorit',
    loadChildren: () => import('./favorit/favorit.module').then( m => m.FavoritPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lokasi',
    loadChildren: () => import('./lokasi/lokasi.module').then( m => m.LokasiPageModule)
  },
  {
    path: 'versi',
    loadChildren: () => import('./versi/versi.module').then( m => m.VersiPageModule)
  },
  {
    path: 'baca',
    loadChildren: () => import('./baca/baca.module').then( m => m.BacaPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
