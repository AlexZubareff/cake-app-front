import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductInCart } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class RestCartService {

  constructor(private http: HttpClient) { }

  addCart(data: IProductInCart):Observable<IProductInCart> {

    return this.http.post<IProductInCart>('http://localhost:3000/carts/', data);

}


  getCartById(id: string | undefined): Observable<IProductInCart> {

  return this.http.get<IProductInCart>('http://localhost:3000/carts/' + id);

}

// getAllProduct(): Observable<IProductInCart[] | []> {

//   return this.http.get<IProductInCart[]>('http://localhost:3000/carts/');

// }
}
