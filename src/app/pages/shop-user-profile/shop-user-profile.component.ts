import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { UserOrdersComponent } from '../../components/user-orders/user-orders.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';

@Component({
  selector: 'app-shop-user-profile',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    UserOrdersComponent,
    UserProfileComponent
  ],
  templateUrl: './shop-user-profile.component.html',
  styleUrl: './shop-user-profile.component.css'
})
export class ShopUserProfileComponent {

  constructor(private router: Router) {}

getUserOrders() {

  this.router.navigate(['shop/profile/user-orders']);

}
getUserProfile() {

  this.router.navigate(['shop/profile']);
}
}
