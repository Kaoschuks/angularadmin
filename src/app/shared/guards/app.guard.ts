import { Injectable } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalsService } from '../services/core/globals.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {
  constructor(
    private globals: GlobalsService, 
    public router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
    })
  }

}