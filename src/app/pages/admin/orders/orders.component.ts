import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../../services/orders/orders.service';
import { IOrder } from '../../../models/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  titlePage: string = 'Заказы'; 
  orders: IOrder[];

  constructor(
    private router: Router,
    private ordersService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe((data)=>{
      this.orders = data;
      
      console.log(this.orders);
    });
  }

}
