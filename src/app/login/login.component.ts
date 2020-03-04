import { Component, OnInit } from '@angular/core';
import { HelperService } from '../shared/helper.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  loading = false;

  constructor(
    private helperService: HelperService,
    private router: Router,
    private alertService: AlertService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  async doLogin() {
    try {
      this.loading = true;
      const rs: any = await this.loginService.login(this.username, this.password);
      this.loading = false;
      if (rs.jwt_token) {
        const tokenName = this.helperService.getTokenName();
        this.helperService.setCookie(tokenName, rs.jwt_token);
        this.helperService.setCookie('firstName', rs.user.name);
        this.helperService.setCookie('lastName', rs.user.last_name);
        this.helperService.setCookie('jobPostion', rs.user.job_position);
        this.helperService.setCookie('email', rs.user.email);
        this.alertService.success();

        const rnd = Math.random();
        this.router.navigateByUrl('/users?rnd=' + rnd);
      } else {
        this.alertService.error('ชื่อผู้ใช้งาน/รหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      this.loading = false;
      console.log(error);
      this.alertService.error();
    }
  }

}
