import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../models/product';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy, OnChanges{
  products: IProduct[];
  limit: number = 10;
  titlePage: string = 'товары';

    constructor(
      private router: Router,
      private productService: ProductsService
    ) { }

  ngOnInit(): void {
//Добавляет текущий URL в LocalStoradge
    window.localStorage.setItem(
      'current-url',
      this.router.url,)

      this.productService.getAllProducts(this.limit).subscribe((data)=>{
        this.products = data;
        
        console.log(this.products);
      });
    
  }
  ngOnDestroy(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  // reloadCurrentPage() {

  //   this.router.navigateByUrl(localStorage.getItem('current-url')!);;
  //  }

  addProduct(): void {
  console.log('Вызов формы добавления товара...')
  }

}



