import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductInCart } from '../../../models/product';
import { ICart } from '../../../models/cart';

@Injectable({
  providedIn: 'root'
})
export class RestCartService {

  constructor(private http: HttpClient) { }

  addCart(data: ICart):Observable<ICart> {
    console.log('data in restCartService: ', data)

    return this.http.post<ICart>(`http://${environment.serverUrl}/carts`, data);

}


  getCartById(id: string | undefined): Observable<ICart> {

  return this.http.get<ICart>(`http://${environment.serverUrl}/carts/` + id);

}

updateUserCart( id: string, data: IProductInCart[]): Observable<ICart> {
  console.log(id)
  console.log(data)

  return this.http.put<ICart>(`http://${environment.serverUrl}/carts/` + id, data);

}

// getAllProduct(): Observable<IProductInCart[] | []> {

//   return this.http.get<IProductInCart[]>('http://localhost:3000/carts/');

// }
}
