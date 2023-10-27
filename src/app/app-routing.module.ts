import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },*/
  {
    path: 'det-gender',
    loadChildren: () => import('./det-gender/det-gender.module').then( m => m.DetGenderPageModule)
  },
  {
    path: 'det-name',
    loadChildren: () => import('./det-name/det-name.module').then( m => m.DetNamePageModule)
  },
  {
    path: 'current-weather',
    loadChildren: () => import('./current-weather/current-weather.module').then( m => m.CurrentWeatherPageModule)
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./contact-me/contact-me.module').then( m => m.ContactMePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
