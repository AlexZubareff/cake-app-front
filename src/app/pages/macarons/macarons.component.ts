import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { IProduct } from '../../models/product';
import { SetCardComponent } from '../../components/set-card/set-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-macarons',
  standalone: true,
  imports: [SetCardComponent, CommonModule],
  templateUrl: './macarons.component.html',
  styleUrl: './macarons.component.css'
})
export class MacaronsComponent implements OnInit{
productMac: IProduct[] | [];
limit: number = 0;


  constructor(
    private router: Router,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getProductsByType('mac', this.limit).subscribe((data)=>{
      this.productMac = data;
      
      console.log(this.productMac);
    });
  }


  showMore(){

  }

}
