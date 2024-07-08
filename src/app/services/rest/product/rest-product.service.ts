import { Injectable } from '@angular/core';
import { IProduct } from '../../../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: IProduct):Observable<IProduct> {

    return this.http.post<IProduct>('http://localhost:3000/products/', data);

}


getProductById(id: string | undefined): Observable<IProduct> {

  return this.http.get<IProduct>('http://localhost:3000/products/' + id);

}

getAllProduct(limit: number): Observable<IProduct[] | []> {

  return this.http.get<IProduct[]>('http://localhost:3000/products/', {params:{limit: limit}})

}

getProductByType(type: string, limit: number): Observable<IProduct[] | []> {

  return this.http.get<IProduct[]>('http://localhost:3000/products/type', { params: { type: type, limit: limit } });

}


}
