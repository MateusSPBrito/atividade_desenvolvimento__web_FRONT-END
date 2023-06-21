import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import Login from './models/login';

@Injectable()
export class HttpRequesInterceptor implements HttpInterceptor {

 
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
     ): Observable<HttpEvent<any>> {
    var _user =localStorage.getItem('user')
    var _token = localStorage.getItem('token')
    if(_token !== null){
      const dupReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${_token}`)
        
      })
      return next.handle(dupReq);
    }
    console.log(localStorage.getItem('token'));
    return next.handle(request);
  }
}

