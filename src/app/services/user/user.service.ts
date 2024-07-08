import { Injectable } from '@angular/core';
import { IUser } from '../../models/users';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestUserService } from '../rest/user/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: IUser | null;

  private token: string;

  private userBehSubject = new BehaviorSubject<IUser | null>(null);
  readonly userBehSubject$ = this.userBehSubject.asObservable();
  

  constructor(private restUserService: RestUserService) { }

  getUser():any {
    if(this.user) {
      this.userBehSubject.subscribe((data) => {
        console.log('subscribe data getUser: ', data)
        this.user = data;
      })
      return this.user;
    } else {
      // const userFromLocalStorage = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_NAME) || '')
      // return userFromLocalStorage;
    }
    
    
  }

  getUserById(id: string | undefined): Observable<IUser> {
    return this.restUserService.getUserById(id);
  }


  setUser(user: IUser) {
    if(user) {
      this.user = user;
      console.log(this.user)

      this.userBehSubject.next(this.user)
    }
  }

  unSetUser(){
    this.user = null;
    console.log(this.user)

    this.userBehSubject.next(this.user)
  }

  updateUser(){}

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
