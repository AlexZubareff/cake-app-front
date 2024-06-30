import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { IProductInCart } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnChanges {

  // public cart: IProductInCart[] | null;

  public cart: any;
  public totalCoast: any = 0;
  public totalCount: any;
  public totalCountText: any;

  cartTotalCoastUnsubscribe: Subscription;
  cartTotalCountUnsubscribe: Subscription;
  cartTotalCountTextUnsubscribe: Subscription;
  newCart: Subscription;



  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    console.log('Текущая корзина:', this.cart);

    // this.totalCoast = this.cartService.getCartTotalCoast();
    this.totalCoast = this.cartService.getCartTotalCoast();
    this.totalCount = this.cartService.getCartTotalCount();
    this.totalCountText = this.cartService.getCartTotalCountText(this.totalCount);

    this.cartTotalCoastUnsubscribe  = this.cartService.newTotalCartCoast$.subscribe(
      (data) => {
        console.log('newTotalCartCoast: ', data);
        this.totalCoast = data;
      }
    );
    this.cartTotalCountUnsubscribe  = this.cartService.newCartTotalCount$.subscribe(
      (data) => {
        console.log('newCartTotalCount: ', data);
        this.totalCount = data;
      }
    );
    this.cartTotalCountTextUnsubscribe  = this.cartService.newCartTotalCountText$.subscribe(
      (data) => {
        console.log('newCartTotalCountText: ', data);
        this.totalCountText = data;
      }
    );

    this.newCart  = this.cartService.newProductsInCart$.subscribe(
      (data) => {
          console.log('Корзина после удаления: ' ,data);
       
        this.cart = data;
      }
    );
    
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  orderSubmit() {
    window.alert('Заказ оформлен!');
  }
}
