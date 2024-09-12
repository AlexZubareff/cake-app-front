import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../../models/order';
import { OrdersService } from '../../../services/orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list-item',
  standalone: true,
  imports: [],
  templateUrl: './order-list-item.component.html',
  styleUrl: './order-list-item.component.css'
})
export class OrderListItemComponent implements OnInit{
  orders: IOrder[];

constructor(
  private orderService: OrdersService,
  private router: Router
){}

ngOnInit(): void {
this.orderService.getAllOrders().subscribe((data) => {


this.orders = data;

console.log('Заказы из БД :', data)
})
}


goToOrderEditPage(){
this.router.navigate(['admin/orders/edit']);
}
}