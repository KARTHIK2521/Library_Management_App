import { Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route : ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

    const router=Inject(Router);

    const sessiondata=sessionStorage.getItem('username');

    if(sessiondata != null){
      return true;
    }
    else{
     router.navigateByUrl(['login']);
      return false;
    }

};
