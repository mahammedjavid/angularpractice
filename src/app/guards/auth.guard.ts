import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private route:Router){}
  


  canActivate(){

    if(this.authservice.isAthuthenticated){
    return true;
    }
    else{

      this.route.navigate(['/login'])
      return false
    }
  }
  
}
