import { Component, Input } from '@angular/core';
import { IProduct, IProductInCart } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

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
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router
) {}


addToCart(product: IProductInCart) {
  this.cartService.addToCart(product);
  // window.alert(
  //     'Your product has been added to the cart!'
  // );
}
  
getProduct(id: string) {
//  this.productsService.getProductById(id).subscribe(data => {

//    console.log('Product by ID', data)
//    this.productsService.setCurrentProduct(data);
   
//    this.router.navigate([`product`]);


//  });
this.productsService.productID = id;  
this.productsService.setProductIdToStore(id);
this.router.navigate([`product`]);

}


}
