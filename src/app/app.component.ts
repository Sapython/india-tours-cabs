import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

import { Router } from '@angular/router';

import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Auth, authState, User } from '@angular/fire/auth';
import { EMPTY, Observable, Subject } from 'rxjs';
import { Platform, PopoverController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
import { DataProvidersService } from './services/dataProviders/data-providers.service';
import { urls } from './services/urls';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly user: Observable<User | null> = EMPTY;

  public loggedInUserData: Subject<any> = new Subject();

  public userdata: any;
  constructor(
    private platform: Platform,
    public authService: AuthenticationService,
    private router: Router,
    private auth: Auth,
    public dataProvider: DataProvidersService,
    private fs: Firestore,
  ) {
    if (!this.platform.is('capacitor')) {
      this.platform.ready().then(() => {
        GoogleAuth.initialize();
        GoogleAuth.initialize({
          clientId:
            '525383161466-cr4dgb3mnfbd5gdrds6ths2gqo1jsc1e.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });
        console.log(GoogleAuth);
      });
    }
    this.user = authState(this.auth);
    this.user.subscribe((user: any) => {
      if (user) {
        console.log(user.uid);
        this.dataProvider.LoggedInUser = true;
        this.loggedInUserData.next(user);
        const userUrl = urls.user.replace('{USER_ID}', user.uid);
        docData(doc(this.fs, userUrl)).subscribe((res) => {
          this.dataProvider.user = res;
          console.log(this.dataProvider.user);
          this.router.navigate(['home-main']);

        });
      } else {
        console.log("logged out");
        this.router.navigate(['login']);
        this.dataProvider.LoggedInUser = false;
        this.loggedInUserData.next(false);
      }
    });
  }
}
