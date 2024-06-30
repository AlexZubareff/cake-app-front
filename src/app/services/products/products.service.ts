import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';
import { RestProductService } from '../rest/product/rest-product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private restProductService: RestProductService) { }

  getAllProducts(): Observable<IProduct[] | []> {
    return this.restProductService.getAllProduct();
    }
    
    
  }

//   getProductById(id: string | undefined): Observable<IProduct> {
//     return this.restUserService.getUserById(id);
//   }


//   setUser(user: IUser) {
//     if(user) {
//       this.user = user;
//       console.log(this.user)

//       this.userBehSubject.next(this.user)
//     }
//   }
// }
