import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private guard: AngularFireAuth){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>{
    const user = await this.guard.currentUser;
    const isAuthenticated = user ? true: false;
    if(!isAuthenticated){
      alert('login to enter in Home')
    }
    return isAuthenticated;
  }
  
}
