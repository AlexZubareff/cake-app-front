import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAction } from '../../../models/action';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestActionService {
  constructor(private http: HttpClient) { }

  addAction(data: IAction):Observable<IAction> {

    return this.http.post<IAction>('http://localhost:3000/actions/', data);

}


getActionById(id: string | undefined): Observable<IAction> {

  return this.http.get<IAction>('http://localhost:3000/actions/' + id);

}

getAllActions(limit: number): Observable<IAction[] | []> {

  return this.http.get<IAction[]>('http://localhost:3000/actions/', {params:{limit: limit}}

)

}

getActionsByType(type: string, limit: number): Observable<IAction[] | []> {

  return this.http.get<IAction[]>('http://localhost:3000/actions/type', { params: { type: type, limit: limit } });

}

}
