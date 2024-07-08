import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../models/users';
import { UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';
import { AuthComponent } from '../../pages/auth/auth.component';
import { RegistrationComponent } from '../../pages/registration/registration.component';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthComponent,
    RegistrationComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit, OnDestroy, OnChanges{
  
  public user: IUser | null;
  public totalCount: any;
  public totalCountText: any;

  userUnsubscribe: Subscription;
  cartTotalCountUnsubscribe: Subscription;
  cartTotalCountTextUnsubscribe: Subscription;

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private elementRef: ElementRef<HTMLElement>
  ) { }
  
 ngOnInit(): void {
 this.userUnsubscribe = this.userService.userBehSubject$.subscribe((data) => {
  console.log('subscribe data getUser: ', data);
  this.user = data;
 })
 this.totalCount = this.cartService.getCartTotalCount();
 this.cartTotalCountUnsubscribe  = this.cartService.newCartTotalCount$.subscribe(
  (data) => {
    console.log('newCartTotalCount: ', data);
    this.totalCount = data;
  }
);
this.totalCountText = this.cartService.getCartTotalCountText(this.totalCount);
this.cartTotalCountTextUnsubscribe  = this.cartService.newCartTotalCountText$.subscribe(
  (data) => {
    console.log('newCartTotalCountText: ', data);
    this.totalCountText = data;
  }
);

 }


 ngOnChanges(changes: SimpleChanges): void {

 }


 ngOnDestroy(): void {
   throw new Error('Method not implemented.');
 }

userExit() {
  window.localStorage.removeItem(
    'user-private-token'
    );
    this.userService.unSetUser();
    this.cartService.clearCart();
    console.log('USER после выхода: ', this.user)
}

showAuthModal(){
  const element = document.getElementById('authModal');
  // console.log(element);
  element?.setAttribute("aria-modal","true");
  element?.setAttribute("open","open");
  
}

showRegModal(){
  const element = document.getElementById('registrationModal');
  // console.log(element);
  element?.setAttribute("aria-modal","true");
  element?.setAttribute("open","open");
  
}

}
