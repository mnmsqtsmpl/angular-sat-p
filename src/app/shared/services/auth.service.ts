import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: IUser;
  constructor() {
    const name = localStorage.getItem('currentUser');
    if (name){
      this.user = { name }
    }
  }
}
