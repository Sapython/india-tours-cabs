
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonicSwiper } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataProvidersService } from './services/dataProviders/data-providers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageModule } from './user/user.module';
import { ToursPackagesPageModule } from './tours-packages/tours-packages.module';
import { ToursPageModule } from './tours/tours.module';
import { TaxiBookingPageModule } from './taxi-booking/taxi-booking.module';
import { TaxiDetailssPageModule } from './taxi-detailss/taxi-detailss.module';
import { ReviewPagePageModule } from './review-page/review-page.module';
import { RentingPageModule } from './renting/renting.module';
import { RegistrationPageModule } from './registration/registration.module';
import { PaymentPageModule } from './payment/payment.module';
import { OutstationPageModule } from './outstation/outstation.module';
import { LoadingPageModule } from './loading/loading.module';
import { HomeMainPageModule } from './home-main/home-main.module';
import { GetStartedPageModule } from './get-started/get-started.module';
import { BookingHistoryPageModule } from './booking-history/booking-history.module';
import { BlogPageModule } from './blog/blog.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAnalytics(() => getAnalytics()), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()), 
    provideFirestore(() => getFirestore()), 
    provideFunctions(() => getFunctions()), 
    provideMessaging(() => getMessaging()), 
    providePerformance(() => getPerformance()), 
    provideRemoteConfig(() => getRemoteConfig()), 
    provideStorage(() => getStorage()), NgbModule,
    SwiperModule,
    BrowserAnimationsModule,
    UserPageModule,
    ToursPackagesPageModule,
    ToursPageModule,
    TaxiBookingPageModule,
    TaxiDetailssPageModule,
    ReviewPagePageModule,
    RentingPageModule,
    RegistrationPageModule,
    PaymentPageModule,
    OutstationPageModule,
    LoadingPageModule,
    HomeMainPageModule,
    GetStartedPageModule,
    BookingHistoryPageModule,
    BlogPageModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService,UserTrackingService, DataProvidersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
