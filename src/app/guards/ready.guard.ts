import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from '../services/store.service';

@Injectable({
    providedIn: 'root'
})
export class ReadyGuard implements CanActivate {

    constructor(private store: StoreService, private router: Router) { }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.store.token === true) {
            this.router.navigate(['admin/dashboard'])
            return false
        }
        return true
    }

}
