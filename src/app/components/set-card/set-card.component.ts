import { Component, Input } from '@angular/core';
import { IProduct, IProductInCart } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-set-card',
  standalone: true,
  imports: [],
  templateUrl: './set-card.component.html',
  styleUrl: './set-card.component.css'
})
export class SetCardComponent {

  @Input() set: IProduct;


  constructor(
    private cartService: CartService
) {}


addToCart(product: IProductInCart) {
  this.cartService.addToCart(product);
  // window.alert(
  //     'Your product has been added to the cart!'
  // );
}
  
 


}
