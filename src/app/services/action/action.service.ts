import { Injectable } from '@angular/core';
import { RestActionService } from '../rest/action/rest-action.service';
import { IAction } from '../../models/action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private restActionService: RestActionService) { }

  getAllActions(limit: number): Observable<IAction[] | []> {
    return this.restActionService.getAllActions(limit);
    }
    
  getActionsByType(type: string, limit: number): Observable<IAction[] | []> {
      return this.restActionService.getActionsByType(type, limit);
      }
      
    
        getProductById(id: string | undefined): Observable<IAction> {
          return this.restActionService.getActionById(id);
        }
}
