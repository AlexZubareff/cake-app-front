import { Injectable } from '@angular/core';
import { IProductInCart } from '../../models/product';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICart } from '../../models/cart';
import { RestCartService } from '../rest/cart/rest-cart.service';
import { UserService } from '../user/user.service';
import { IUser } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  currentUser: IUser | null;

  private newTotalCartCoast = new Subject();
  readonly newTotalCartCoast$ = this.newTotalCartCoast.asObservable();

  private newCartTotalCountText = new Subject();
  readonly newCartTotalCountText$ = this.newCartTotalCountText.asObservable();

  private newCartTotalCount = new Subject();
  readonly newCartTotalCount$ = this.newCartTotalCount.asObservable();

  private newProductsInCart = new Subject();
  readonly newProductsInCart$ = this.newProductsInCart.asObservable();

  constructor(
    private restCartService: RestCartService,
    private userService: UserService
  ) {}

  productsInCart: IProductInCart[] | null = [];

  // private cartBehSubject = new BehaviorSubject<IProductInCart[]>(this.productsInCart);
  // readonly cartBehSubject$ = this.cartBehSubject.asObservable();

  addToCart(product: IProductInCart) {
    this.currentUser = this.userService.getUser();
    console.log('Текущий пользователь', this.currentUser);
    if (!this.currentUser) {
      if (this.productsInCart!.length === 0) {
        product.count = 1;
        this.productsInCart!.push(product);
        this.getCartTotalCount();
      } else {
        let productIndex = this.productsInCart!.findIndex(
          (item) => item._id === product._id
        );
        console.log(productIndex);

        if (productIndex !== -1) {
          this.productsInCart![productIndex].count!++;
          this.getCartTotalCount();
        } else {
          product.count = 1;
          this.productsInCart!.push(product);
          this.getCartTotalCount();
        }
      }
      console.log('PRODUCTS IN CART: ', this.productsInCart);

      localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
    } else {
      if (this.productsInCart!.length === 0) {
        product.count = 1;
        this.productsInCart!.push(product);

        this.getCartTotalCount();
        this.restCartService
          .updateUserCart(this.currentUser.cartId!, this.productsInCart!)
          .subscribe((data) => {
            console.log('Обновленная корзина на сервере: ', data);
          });
      } else {
        let productIndex = this.productsInCart!.findIndex(
          (item) => item._id === product._id
        );
        console.log(productIndex);

        if (productIndex !== -1) {
          this.productsInCart![productIndex].count!++;
          this.getCartTotalCount();
        } else {
          product.count = 1;
          this.productsInCart!.push(product);
          this.getCartTotalCount();
          this.restCartService
            .updateUserCart(this.currentUser.cartId!, this.productsInCart!)
            .subscribe((data) => {
              console.log('Обновленная корзина на сервере: ', data);
            });
        }
      }
      console.log('PRODUCTS IN CART: ', this.productsInCart);

      localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
    }
  }

  getCartItems() {
    if (this.productsInCart!.length != 0) {
      return this.productsInCart;
    } else {
      let cartInStorage = JSON.parse(localStorage.getItem('USER CART') || '');
      console.log('cartInStorage: ', typeof cartInStorage);
      return cartInStorage;
    }
  }

  getUserCart(id: string): IProductInCart[] | null {

    this.restCartService.getCartById(id).subscribe((data) => {
      console.log('Корзина пользователя с сервера: ', data);
      this.productsInCart = this.concatAllCarts(data.cart);
      console.log('Общая корзина: ', this.productsInCart);

      localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));

      this.restCartService.updateUserCart(id, this.productsInCart!).subscribe((data)=>{
        console.log('Обновленная корзина: ', data);
        // window.alert('Корзина обновлена!');
      });

      this.newProductsInCart.next(this.productsInCart);
      this.getCartTotalCoast();
      this.getCartTotalCount();
    });
    return this.productsInCart;
  }

  concatAllCarts(cartFromServer: IProductInCart[] | null): IProductInCart[] |null {
    const cartFromStorage = JSON.parse(localStorage.getItem('USER CART') || '');
    // console.log('Корзина из LocalS: ', cartFromStorage);
    // console.log('Корзина с сервера: ', cartFromServer);
    // console.log('cartFromStorage: ', cartFromStorage.length);


    if (cartFromStorage.length === 0) {
      return cartFromServer;
    } else {
      let resultCart = cartFromServer;
      cartFromStorage.forEach((storageCartItem: IProductInCart) => {
        let resaltCartproduct = resultCart!.find((resultCartItem) => resultCartItem._id === storageCartItem._id);
        if (!resaltCartproduct) {
          resultCart?.push(storageCartItem);
        } 
      });
      // console.log('Корзина итого: ', resultCart);

      return resultCart;
    }
  }

  getCartTotalCount(): number | null {
    let currentCart = this.getCartItems();
    let totalCount: number | null = 0;
    if (Array.isArray(currentCart)) {
      currentCart?.forEach((item) => {
        totalCount! += item.count!;
      });
    }
    this.getCartTotalCountText(totalCount);
    this.newCartTotalCount.next(totalCount);
    console.log('Total Count: ', totalCount);

    // this.newTotalCartCoast.next(totalCoast);

    return totalCount;
  }

  getCartTotalCountText(count: number): string {
    let array = ['товар', 'товара', 'товаров'];
    let text =
      (array = array) &&
      array[
        count % 100 > 4 && count % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][count % 10 < 5 ? count % 10 : 5]
      ];
    this.newCartTotalCountText.next(text);
    return text;
  }

  getCartTotalCoast(): number | null {
    let currentCart = this.getCartItems();
    let totalCoast: number | null = 0;
    if (currentCart.length !== 0) {
      currentCart!.forEach((item: { count: any; price: number }) => {
        totalCoast! += item.count! * item.price;
      });
      console.log('Total price: ', totalCoast);

      this.newTotalCartCoast.next(totalCoast);

      return totalCoast;
    } else {
      this.newTotalCartCoast.next(0);

      return 0;
    }
  }

  addItemCount(id: string | undefined) {
    this.currentUser = this.userService.getUser();
    this.productsInCart = this.getCartItems();
    let productIndex = this.productsInCart!.findIndex((item) => item._id === id);

    console.log(productIndex);
    console.log('Текущий пользователь: ',this.currentUser);

    if (productIndex !== -1) {
      this.productsInCart![productIndex].count!++;


      localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
      this.getCartTotalCount();

      if(this.currentUser){

        console.log('Обновленная корзина: ',this.productsInCart);

        this.restCartService.updateUserCart(this.currentUser.cartId!, this.productsInCart!).subscribe((data)=>{
          console.log('Обновленная корзина на сервере: ', data);
          // window.alert('Корзина обновлена!');
        })

      }
    }

    return this.productsInCart![productIndex].count!;
  }

  delItemCount(id: string | undefined) {
    this.currentUser = this.userService.getUser();
    this.productsInCart = this.getCartItems();
    let productIndex = this.productsInCart!.findIndex((item) => item._id === id);

    // let count: number = this.productsInCart[productIndex].count!;
    console.log(productIndex);

    if (productIndex !== -1) {
      this.productsInCart![productIndex].count!--;
      if (this.productsInCart![productIndex].count! < 0) {
        this.productsInCart![productIndex].count! = 0;
      }
      localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
      this.getCartTotalCount();

      if(this.currentUser){

        console.log('Обновленная корзина: ',this.productsInCart);

        this.restCartService.updateUserCart(this.currentUser.cartId!, this.productsInCart!).subscribe((data)=>{
          console.log('Обновленная корзина на сервере: ', data);
          // window.alert('Корзина обновлена!');
        })

      }
    }
    return this.productsInCart![productIndex].count!;
  }

  delFromCart(id: string) {
    this.currentUser = this.userService.getUser();
    this.productsInCart = this.getCartItems();
    // let cart = this.productsInCart.splice(this.productsInCart.findIndex(item => item._id === id), 1);
    let newCart: IProductInCart[] | null = this.productsInCart!.filter(
      (item) => item._id !== id
    );
    this.productsInCart = newCart;
    localStorage.setItem('USER CART', JSON.stringify(newCart));
    this.newProductsInCart.next(newCart);
    this.getCartTotalCoast();
    this.getCartTotalCount();

    if(this.currentUser){

      console.log('Обновленная корзина: ',this.productsInCart);

      this.restCartService.updateUserCart(this.currentUser.cartId!, this.productsInCart!).subscribe((data)=>{
        console.log('Обновленная корзина на сервере: ', data);
        // window.alert('Корзина обновлена!');
      })

    }

    // console.log('Корзина после удаления: ' ,cart);
  }

  clearCart() {
    this.currentUser = this.userService.getUser();
    this.productsInCart = this.getCartItems();
    this.productsInCart = [];
    localStorage.setItem('USER CART', JSON.stringify(this.productsInCart));
    this.newProductsInCart.next(this.productsInCart);
    this.getCartTotalCoast();
    this.getCartTotalCount();

    if(this.currentUser){

      console.log('Обновленная корзина: ',this.productsInCart);

      this.restCartService.updateUserCart(this.currentUser.cartId!, this.productsInCart!).subscribe((data)=>{
        console.log('Обновленная корзина на сервере: ', data);
        // window.alert('Корзина обновлена!');
      })

    }

    // return this.productsInCart;
  }
}
