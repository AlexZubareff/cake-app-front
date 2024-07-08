import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { IProductInCart } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { Subscription } from 'rxjs';
import { RestCartService } from '../../services/rest/cart/rest-cart.service';
import { UserService } from '../../services/user/user.service';
import { ICart } from '../../models/cart';
import { IUser } from '../../models/users';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnChanges {

  public cart: IProductInCart[] | null;
  public user: IUser | null;

  // public cart: any;
  public totalCoast: any = 0;
  public totalCount: any;
  public totalCountText: any;

  cartTotalCoastUnsubscribe: Subscription;
  cartTotalCountUnsubscribe: Subscription;
  cartTotalCountTextUnsubscribe: Subscription;
  newProductsInCart: Subscription;
  newCart: Subscription;
  currentUser: Subscription;



  constructor(
    private cartService: CartService,
    private restCartService: RestCartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.cart = this.cartService.getCartItems();
    console.log('Текущая корзина:', this.cart);

    // this.totalCoast = this.cartService.getCartTotalCoast();
    this.totalCoast = this.cartService.getCartTotalCoast();
    this.totalCount = this.cartService.getCartTotalCount();
    this.totalCountText = this.cartService.getCartTotalCountText(this.totalCount);

    this.currentUser = this.userService.userBehSubject$.subscribe((data) => {
      console.log('subscribe data getUser: ', data);
      this.user = data;
     })

    this.cartTotalCoastUnsubscribe  = this.cartService.newTotalCartCoast$.subscribe(
      (data: any) => {
        console.log('newTotalCartCoast: ', data);
        this.totalCoast = data;
      }
    );
    this.cartTotalCountUnsubscribe  = this.cartService.newCartTotalCount$.subscribe(
      (data: any) => {
        console.log('newCartTotalCount: ', data);
        this.totalCount = data;
      }
    );
    this.cartTotalCountTextUnsubscribe  = this.cartService.newCartTotalCountText$.subscribe(
      (data: any) => {
        console.log('newCartTotalCountText: ', data);
        this.totalCountText = data;
      }
    );

    this.newCart  = this.cartService.newProductsInCart$.subscribe(
      (data: any) => {
          console.log('Текуще состояние корзины: ' ,data);
       
        this.cart = data;
      }
    );
    
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  orderSubmit() {

    
    console.log('orderSubmit Cart: ', this.cartService.getCartItems());
    let currentCart = this.cartService.getCartItems();
    if(Array.isArray(currentCart)){
      if(currentCart.length === 0) {
        window.alert('Ваша корзина пуста.');
      } else  if (this.user){
      
        console.log('UserCart ID: ', this.user.cartId)

        // let newUserCart: ICart = {
        //   cart: currentCart,
        //   userId: this.user.id,
        // }     

        let newUserCart: IProductInCart[] = currentCart;
 

        console.log('newUserCart User: ', newUserCart)
         

        this.restCartService.updateUserCart(this.user.cartId!, newUserCart).subscribe((data)=>{
          console.log('cart User Data: ', data);
          window.alert('Заказ оформлен!');
        })

        // let currentUser = this.userService.getUser();
        console.log('current User: ', this.user)
     
    }else {

      window.alert('Необходимо авторизоваться!');
    }
   
      
    } else {
      window.alert('Ошибка сервера!');
      

    }
    // this.restCartService.addCart(currentCart).subscribe((data)=>{
    //   console.log('registration User Data: ', data);
    //   window.alert('Заказ оформлен!');
    // })

}

clearCart():void{
 this.cartService.clearCart();
}
}
