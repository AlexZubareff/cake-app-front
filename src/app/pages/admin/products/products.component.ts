import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../models/product';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../../../components/admin-components/product-list-item/product-list-item.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductListItemComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AddProductComponent,
    EditProductComponent
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

      // this.productService.getAllProducts(this.limit).subscribe((data)=>{
      //   this.products = data;
        
      //   console.log(this.products);
      // });
    
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



