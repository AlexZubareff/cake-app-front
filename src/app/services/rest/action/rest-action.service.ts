import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAction } from '../../../models/action';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestActionService {
  constructor(private http: HttpClient) { }

  addAction(data: IAction):Observable<IAction> {

    return this.http.post<IAction>(`http://${environment.serverUrl}/actions/`, data);

}


getActionById(id: string | undefined): Observable<IAction> {

  return this.http.get<IAction>(`http://${environment.serverUrl}/actions/` + id);

}

getAllActions(limit: number): Observable<IAction[] | []> {

  // return this.http.get<IAction[]>('http://${environment.serverUrl}/actions/', {params:{limit: limit}}
  return this.http.get<IAction[]>(`http://${environment.serverUrl}/actions/`, {params:{limit: limit}}


)

}

getActionsByType(type: string, limit: number): Observable<IAction[] | []> {

  return this.http.get<IAction[]>(`http://${environment.serverUrl}/actions/type`, { params: { type: type, limit: limit } });

}

}
