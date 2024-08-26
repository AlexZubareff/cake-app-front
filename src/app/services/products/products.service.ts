import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';
import { RestProductService } from '../rest/product/rest-product.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private restProductService: RestProductService) { }

  // public product$ = new Subject<IProduct>();

  // setCurrentProduct(product: IProduct) {
  //    this.product$.next(product); 
  // }

  public product: IProduct;
  public productID: string | null;
  

  // public product = new Subject();
  // readonly product$ = this.product.asObservable();


  getAllProducts(limit: number): Observable<IProduct[] | []> {
    return this.restProductService.getAllProduct(limit);
    }
    
  getProductsByType(type: string, limit: number): Observable<IProduct[] | []> {
      return this.restProductService.getProductByType(type, limit);
      }
      
    
  getProductById(id: string | undefined): Observable<IProduct> {

          return this.restProductService.getProductById(id);
      }
        
  setCurrentProduct(product: IProduct) {
    this.product = product; 

      // this.product.next(product); 
      }

      setProductIdToStore(id: string): void {
        localStorage.setItem(
          'productID',
          id,
          )
      }
    
      gettProductIdFromStore(): string | null {
    
    
          return localStorage.getItem('productID');
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
