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

  sets: IProduct[] | [];
  actions: IAction[] | [];
  setLimit: number = 6;
  actionLimit: number = 4;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private actionService: ActionService
  ){}
  
  ngOnInit(): void {

    this.productsService.getProductsByType('set', this.setLimit).subscribe((data: IProduct[] | [])=>{
      this.sets = data;
      console.log('SETS FROM SERVER: ', this.sets)
    });

    this.actionService.getAllActions(this.actionLimit).subscribe((data) =>{
      this.actions = data;
      
      console.log(this.actions);
    });

  //   this.productsService.getAllProducts().subscribe((data: IProduct[] | []) => {
  //     this.products = data;
  //     console.log('SETS FROM SERVER: ', this.products)
      
  //   }
  // )
  }



  goToSetsPage(){
    this.router.navigate(['sets']);
  }
}
