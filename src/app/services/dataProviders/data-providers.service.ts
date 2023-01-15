import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProvidersService {

  constructor() { 
  }

  blogData: any;
  public LoggedInUser : boolean = false;
  public user:any;
  public loading:boolean = false;
}
