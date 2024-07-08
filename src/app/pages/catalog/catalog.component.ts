import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../models/product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from '../../components/pipes/filter-product.pipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [SetCardComponent, CommonModule, FormsModule, FilterProductPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{
  products: IProduct[] | [];
  limit: number = 0;
  productSearchValue: string = '';
  
  
    constructor(
      private router: Router,
      private productsService: ProductsService
    ){}
  
    ngOnInit(): void {
      this.productsService.getAllProducts(this.limit).subscribe((data)=>{
        this.products = data;
        
        console.log(this.products);
      });
    }
  
  
    showMore(){
  
    }

    getTagsProduct(type: string){
      console.log('Тип продукта: ', type);
      this.productsService.getProductsByType(type, this.limit).subscribe((data)=>{
        this.products = data;
        
        console.log(this.products);
      });
    }
}
