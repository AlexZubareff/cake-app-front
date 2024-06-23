import { Injectable } from '@angular/core';
import { IUser } from '../../models/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;

  private token: string;

  private userBehSubject = new BehaviorSubject<IUser | null>(null);
  readonly userBehSubject$ = this.userBehSubject.asObservable();
  

  constructor() { }

  getUser():any {
    if(this.user) {
      return this.user;
    } else {
      // const userFromLocalStorage = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_NAME) || '')
      // return userFromLocalStorage;
    }
    
    
  }

  setUser(user: IUser) {
    if(user) {
      this.user = user;

      this.userBehSubject.next(this.user)
    }
  }

  setToken(token: string): void {
    this.token = token;
    window.localStorage.setItem(
      'user-private-token',
      token,
      );
  }

  // getToken(): string | null {
  //   if(this.token){
  //     return this.token
  //   } else {
  //     const tokenFromLocalStorage = window.localStorage.getItem('token');
  //     return tokenFromLocalStorage;
  //   }
    
  // }

}
