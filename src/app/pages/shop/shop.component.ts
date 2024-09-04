import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ActionCardComponent } from '../../components/action-card/action-card.component';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { ProductComponent } from '../product/product.component';
import { AuthComponent } from '../auth/auth.component';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { IAction } from '../../models/action';
import { ActionService } from '../../services/action/action.service';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    FooterComponent, 
    HeaderComponent,
    MainComponent, 
    ActionCardComponent,
    SetCardComponent,
    ProductComponent,
    AuthComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
