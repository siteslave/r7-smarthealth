import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  tokenName = 'ssoUserToken';

  constructor(private cookieService: CookieService) { }

  getTokenName() {
    return this.tokenName;
  }

  removeAllCookies(): void {
    this.cookieService.deleteAll();
  }

  getCookie(cookieName: any): string {
    return this.cookieService.get(cookieName);
  }

  setCookie(cookieName: any, value: any): void {
    this.cookieService.set(cookieName, value, 1, null, null, environment.secureCookie, 'Lax');
  }

  checkCookie(cookieName: any): boolean {
    return this.cookieService.check(cookieName);
  }

  getAuthHeader(): object {
    const token = this.tokenName;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return httpOptions;

  }

}
