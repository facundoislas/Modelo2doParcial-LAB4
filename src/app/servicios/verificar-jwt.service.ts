import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class VerificarJwtService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {

   
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    
      let url: string = state.url;
      console.log('url dentro de canActivate', url);
      console.log(route);
      console.log("estado ", state);
      console.log(this.auth.isLoggedIn())
      if ( this.auth.isLoggedIn() )
      {
        
        return true;
      }
      else
      {
        this.router.navigate(['/home']);
        return !true;
      }
}
}
