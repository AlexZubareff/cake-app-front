import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductInCart } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit{

  @Input() product: IProductInCart;
  

  // @Output() changeCount = new EventEmitter();
  
  count: number | undefined;


  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.count = this.product.count;
  }

  addItemCount(id: string | undefined){
    // console.log('id: ', id);
    // console.log(this.product)
    this.count = this.cartService.addItemCount(id);
    this.cartService.getCartTotalCoast();
    // this.changeCount.emit([id, this.count]);
  }

  delItemCount(id: string | undefined){
    this.count = this.cartService.delItemCount(id);
    this.cartService.getCartTotalCoast();

  }

  delCartItem(id: string | undefined): void{
    if(id){
      console.log('Удаление товара: ',id)
      this.cartService.delFromCart(id);
    }

  }

}
