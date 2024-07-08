import { Component, Input } from '@angular/core';
import { IProduct, IProductInCart } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-macaron-card',
  standalone: true,
  imports: [],
  templateUrl: './macaron-card.component.html',
  styleUrl: './macaron-card.component.css'
})
export class MacaronCardComponent {

  @Input() mac: IProduct;


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
