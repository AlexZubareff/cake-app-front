import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../models/product';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';


@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent implements OnInit, OnDestroy, OnChanges{
products: IProduct[];
limit: number = 10;

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

    goToProductEditPage(){
      this.router.navigate(['admin/products/edit'])
    }
}
