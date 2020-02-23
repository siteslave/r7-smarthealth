import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(
    private helperService: HelperService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    if (this.username === 'test@mail.com' && this.password === 'test') {
      const token = this.helperService.getTokenName();
      this.helperService.setCookie(token, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtaEhlYWx0aCBJRCIsImlhdCI6MTU4MjQzNzk4OSwiZXhwIjoxNjEzOTczOTg5LCJhdWQiOiJhdXRoLm1vcGguZ28udGgiLCJzdWIiOiJyaWFucGl0QGdtYWlsLmNvbSIsIkZpcnN0TmFtZSI6IlNhdGl0IiwiTGFzdE5hbWUiOiJSaWFucGl0IiwiRW1haWwiOiJyaWFucGl0QGdtYWlsLmNvbSIsIlJvbGUiOlsiTWFuYWdlciIsIlByb2plY3QgQWRtaW5pc3RyYXRvciJdfQ.MRGH0JDnnjGzFki920PKdzKeCqkNl1nqnobigXjI9KI')
      const rnd = Math.random();
      this.router.navigateByUrl('/users?rnd=' + rnd);
    } else {
      this.alertService.error('กรุณาระบุอีเมล์​ test@mail.com และรหัสผ่าน test');
    }
  }

}
