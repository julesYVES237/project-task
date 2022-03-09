import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {AuthService} from "./auth.service";
/*
@Injectable({
  providedIn: 'root'
})
 export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req,next) {
    let authService = this.injector.get(AuthService);
    if(authService.getJwtToken() == null){
      return next.handle(req);
    }
    else{
      let tokenizedReq= req.clone({
        setHeaders:{
          Authorization: `Bearer ${authService.getJwtToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }

  } 
}
 */