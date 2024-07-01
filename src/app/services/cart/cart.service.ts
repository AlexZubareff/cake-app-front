import { Injectable } from '@angular/core';
import { IProductInCart } from '../../models/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private newTotalCartCoast = new Subject();
  readonly newTotalCartCoast$ = this.newTotalCartCoast.asObservable();

  private newCartTotalCountText = new Subject();
  readonly newCartTotalCountText$ = this.newCartTotalCountText.asObservable();

  private newCartTotalCount = new Subject();
  readonly newCartTotalCount$ = this.newCartTotalCount.asObservable();

  private newProductsInCart = new Subject();
  readonly newProductsInCart$ = this.newProductsInCart.asObservable();

  constructor() { }
  
  productsInCart: IProductInCart[] = [];

  // private cartBehSubject = new BehaviorSubject<IProductInCart[]>(this.productsInCart);
  // readonly cartBehSubject$ = this.cartBehSubject.asObservable();

  addToCart(product: IProductInCart) {
       
    if(this.productsInCart.length === 0) {

      product.count = 1;
      this.productsInCart.push(product);
      this.getCartTotalCount();

      } else {
            let productIndex = this.productsInCart.findIndex(item => item._id === product._id);
            console.log(productIndex);
      
            if(productIndex !== -1) {
      
              this.productsInCart[productIndex].count!++
              this.getCartTotalCount();

    } else {
      product.count = 1;
      this.productsInCart.push(product);
      this.getCartTotalCount();
    }


    }
    console.log('PRODUCTS IN CART: ', this.productsInCart);
    
    localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
  
}

getCartItems() {
  if(this.productsInCart.length != 0) {    
    return this.productsInCart;
  } else {
    let cartInStorage = JSON.parse(localStorage.getItem('USER CART') || '');
    console.log('cartInStorage: ', cartInStorage);
   return cartInStorage;
  }
}

getCartTotalCount(): number | null {
  let currentCart = this.getCartItems();
  let totalCount: number | null = 0;
  if(Array.isArray(currentCart)) {
    currentCart?.forEach((item) => {
      totalCount! += item.count!;
  
    })
  }
  this.getCartTotalCountText(totalCount);
  this.newCartTotalCount.next(totalCount);
  console.log('Total Count: ', totalCount);

  // this.newTotalCartCoast.next(totalCoast);
  
  return totalCount;

}

getCartTotalCountText(count: any): string {
  let array = ['товар', 'товара', 'товаров'];
  let text = (array = array) && array[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? count % 10 : 5]];
  this.newCartTotalCountText.next(text);
  return text;
  
}

getCartTotalCoast(): number | null {
  let currentCart = this.getCartItems();
  let totalCoast: number | null = 0;
  if(Array.isArray(currentCart)) {
    currentCart?.forEach((item) => {
      totalCoast! += item.count! * item.price;
  
    })
  }
  console.log('Total price: ', totalCoast);

  this.newTotalCartCoast.next(totalCoast);

  return totalCoast;

}

addItemCount(id: string | undefined){

  this.productsInCart = this.getCartItems();
  let productIndex = this.productsInCart.findIndex((item) => item._id === id);

  console.log(productIndex);

  if (productIndex !== -1) {
    this.productsInCart[productIndex].count!++;
    localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
    this.getCartTotalCount();
  }

    return this.productsInCart[productIndex].count!;
    
  
}

delItemCount(id: string | undefined){
  this.productsInCart = this.getCartItems();
  let productIndex = this.productsInCart.findIndex((item) => item._id === id);
  
  // let count: number = this.productsInCart[productIndex].count!;
  console.log(productIndex);

  if (productIndex !== -1) {
    this.productsInCart[productIndex].count!--;
    if(this.productsInCart[productIndex].count! < 0) {
      this.productsInCart[productIndex].count! = 0
    }
    localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
    this.getCartTotalCount();

  }
  return this.productsInCart[productIndex].count!;
 

}

delFromCart(id: string){
  this.productsInCart = this.getCartItems();
  // let cart = this.productsInCart.splice(this.productsInCart.findIndex(item => item._id === id), 1);
  let newCart:IProductInCart[] | null = this.productsInCart.filter(item => item._id !== id);
  this.productsInCart = newCart;
  localStorage.setItem('USER CART', JSON.stringify(newCart));
  this.newProductsInCart.next(newCart);
  this.getCartTotalCoast();
  this.getCartTotalCount();
  
  // console.log('Корзина после удаления: ' ,cart);

}

clearCart() {
    this.productsInCart = [];
    return this.productsInCart;
}

}
