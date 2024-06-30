import { Component, OnInit } from '@angular/core';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sets',
  standalone: true,
  imports: [SetCardComponent, CommonModule],
  templateUrl: './sets.component.html',
  styleUrl: './sets.component.css'
})
export class SetsComponent implements OnInit {

  sets: IProduct[] | [];

  constructor(
    private router: Router,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: IProduct[] | []) => {
      this.sets = data;
      console.log('PRODUCTS FROM SERVER: ', this.sets)
      
    }
  )
  }


  showMore(){
    this.router.navigate(['/']);
  }
}
