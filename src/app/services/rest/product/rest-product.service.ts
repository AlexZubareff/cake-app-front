import { Injectable } from '@angular/core';
import { IProduct } from '../../../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: IProduct):Observable<IProduct> {

    return this.http.post<IProduct>('http://localhost:3000/products/', data);

}


addProductById(id: string | undefined): Observable<IProduct> {

  return this.http.get<IProduct>('http://localhost:3000/products/' + id);

}

getAllProduct(): Observable<IProduct[]> {

  return this.http.get<IProduct[]>('http://localhost:3000/products/');

}
}
