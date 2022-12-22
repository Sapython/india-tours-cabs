import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'home-main',
    loadChildren: () => import('./home-main/home-main.module').then( m => m.HomeMainPageModule)
  },
  {
    path: 'taxi-booking',
    loadChildren: () => import('./taxi-booking/taxi-booking.module').then( m => m.TaxiBookingPageModule)
  },
  {
    path: 'review-page',
    loadChildren: () => import('./review-page/review-page.module').then( m => m.ReviewPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
