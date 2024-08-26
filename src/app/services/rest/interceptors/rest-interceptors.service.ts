import {  HttpInterceptorFn } from '@angular/common/http';
// import { UserService } from '../../user/user.service';


export const restInterceptorsService: HttpInterceptorFn = (req, next) => {

  const hasToken = localStorage.getItem('user-private-token');

    if(hasToken) {
      const clonedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${hasToken}`
        }
      })
      return next(clonedReq);
    } else {
      return next(req);
    }

  // return next(req);
}




// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { UserService } from '../../user/user.service';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestInterceptorsService implements HttpInterceptor{

//   constructor(
//     private userService: UserService
//   ) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     const hasToken = this.userService.getToken();

//     console.log('TOKEN', hasToken)
    
//     if(hasToken) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization',
//         'Bearer ' + hasToken)
//       });
//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }

 
//   }
// }
