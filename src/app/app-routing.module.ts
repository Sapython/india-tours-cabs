import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-main',
    // redirectTo: 'renting',
    // redirectTo: 'outstation',
    // redirectTo: 'payment',
    pathMatch: 'full',
    // path: 'home',
    // loadChildren: () =>
    //   import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'booking-history',
    loadChildren: () =>
      import('./booking-history/booking-history.module').then(
        (m) => m.BookingHistoryPageModule
      ),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'get-started',
    loadChildren: () =>
      import('./get-started/get-started.module').then(
        (m) => m.GetStartedPageModule
      ),
  },

  {
    path: 'home-main',
    loadChildren: () =>
      import('./home-main/home-main.module').then((m) => m.HomeMainPageModule),
  },

  {
    path: 'review-page',
    loadChildren: () =>
      import('./review-page/review-page.module').then(
        (m) => m.ReviewPagePageModule
      ),
  },
  {
    path: 'taxi-detailss',
    loadChildren: () =>
      import('./taxi-detailss/taxi-detailss.module').then(
        (m) => m.TaxiDetailssPageModule
      ),
  },
  {
    path: 'taxi-booking',
    loadChildren: () =>
      import('./taxi-booking/taxi-booking.module').then(
        (m) => m.TaxiBookingPageModule
      ),
  },
  {
    path: 'renting',
    loadChildren: () => import('./renting/renting.module').then( m => m.RentingPageModule)
  },
  {
    path: 'outstation',
    loadChildren: () => import('./outstation/outstation.module').then( m => m.OutstationPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'tours-packages',
    loadChildren: () => import('./tours-packages/tours-packages.module').then( m => m.ToursPackagesPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then( m => m.ToursPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
