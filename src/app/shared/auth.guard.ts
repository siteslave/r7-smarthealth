import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private helperService: HelperService
  ) { }

  canActivate() {
    const tokenName = this.helperService.getTokenName();
    const isActived = this.helperService.checkCookie(tokenName);
    if (isActived) {
      const jwtHelper = new JwtHelperService();
      const _token = this.helperService.getCookie(tokenName);
      const isExpired = jwtHelper.isTokenExpired(_token);
      if (isExpired) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


}
