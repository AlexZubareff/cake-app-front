import { Injectable } from '@angular/core';
import { RestOrderService } from '../rest/order/rest-order.service';
import { IOrder } from '../../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private restOrderService: RestOrderService) { }

  getAllOrders(): Observable<IOrder[]> {
    return this.restOrderService.getAllOrders();
  }
}
