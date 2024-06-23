import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../models/users';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {

  constructor(private http: HttpClient) { }

  registerUser(data: IUser):Observable<IUser> {

    return this.http.post<IUser>('http://localhost:3000/users/', data);

}

  authUser(data: IUser, login: string): Observable<IUser> {

    return this.http.post<IUser>('http://localhost:3000/users/' + login, data);

}

getUserById(id: string | undefined): Observable<IUser> {

  return this.http.get<IUser>('http://localhost:3000/users/' + id);

}

}
