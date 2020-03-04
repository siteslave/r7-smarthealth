import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject('LOGIN_URL') private loginUrl: any, private http: HttpClient) { }

  login(username: any, password: any) {
    const url = `${this.loginUrl}`;
    return this.http.post(url, {
      username,
      password
    }).toPromise();
  }


}
