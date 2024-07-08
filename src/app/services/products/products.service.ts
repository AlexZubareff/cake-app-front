import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';
import { RestProductService } from '../rest/product/rest-product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private restProductService: RestProductService) { }

  getAllProducts(limit: number): Observable<IProduct[] | []> {
    return this.restProductService.getAllProduct(limit);
    }
    
  getProductsByType(type: string, limit: number): Observable<IProduct[] | []> {
      return this.restProductService.getProductByType(type, limit);
      }
      
    
        getProductById(id: string | undefined): Observable<IProduct> {
          return this.restProductService.getProductById(id);
        }
  }



//   setUser(user: IUser) {
//     if(user) {
//       this.user = user;
//       console.log(this.user)

//       this.userBehSubject.next(this.user)
//     }
//   }
// }
