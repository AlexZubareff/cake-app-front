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

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    FooterComponent, 
    HeaderComponent, 
    ActionCardComponent,
    SetCardComponent,
    ProductComponent,
    AuthComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent implements OnInit{

  products: IProduct[] | [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ){}
  
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: IProduct[] | []) => {
      this.products = data;
      console.log('PRODUCTS FROM SERVER: ', this.products)
      
    }
  )
  }



  goToSetsPage(){
    this.router.navigate(['sets']);
  }
}
