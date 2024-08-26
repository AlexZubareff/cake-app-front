import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductInCart } from '../../models/product';
import { ProductsService } from '../../services/products/products.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
   
  product: IProduct;
  productID: string | null;

  currentProduct: Subscription;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
 ) {}
  
  ngOnInit(): void {
    // debugger;
    // this.currentUser = this.userService.userBehSubject$.subscribe((data) => {
    //   console.log('subscribe data getUser: ', data);
    //   this.user = data;
    //  })

this.productID = this.productsService.productID || this.productsService.gettProductIdFromStore();

if(this.productID){

  this.productsService.getProductById(this.productID).subscribe((data) => {
  
    console.log(data);
    this.product = data;
  });
}

//  this.productsService.product$.subscribe((data) => {

    

//       // this.product = data;

//     })

}
setDefaultPicture($event: any){
  $event.target.src = 'http://localhost:3000/public/img/product-img/Rectangle 172.png';
}

addToCartSubmit(product: IProductInCart){
  this.cartService.addToCart(product);
}

}
