import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../../../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestOrderService {
  constructor(private http: HttpClient) { }

addOrder(data: IOrder):Observable<IOrder> {

    return this.http.post<IOrder>('http://localhost:3000/orders/', data);

}

getAllOrders():Observable<IOrder[]> {

  return this.http.get<IOrder[]>('http://localhost:3000/orders/');

}

// authUser(data: IUser, login: string): Observable<IUser> {

//     return this.http.post<IUser>('http://localhost:3000/users/' + login, data);

// }

// getAllUser(): Observable<IUser[]> {

//   return this.http.get<IUser[]>('http://localhost:3000/users/');

// }

// getUserById(id: string | undefined): Observable<IUser> {

//   return this.http.get<IUser>('http://localhost:3000/users/' + id);

// }


// updateUser( id: string, data: IUser): Observable<IUser> {
//   console.log(id)
//   console.log(data)

//   return this.http.put<IUser>('http://localhost:3000/users/' + id, data);

// }
}
