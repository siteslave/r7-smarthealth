import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  rnd = Math.random();

  firstName: any;
  lastName: any;

  constructor(private router: Router, private helperService: HelperService) {
    const count = +localStorage.getItem('count') || 0;
    if (!count) {
      localStorage.setItem('count', '1');
      window.location.reload();
    }
  }

  ngOnInit(): void {
    this.firstName = this.helperService.getCookie('firstName');
    this.lastName = this.helperService.getCookie('lastName');
  }

  logout(): void {
    this.helperService.removeAllCookies();
    localStorage.clear();
    const rnd = Math.random();
    this.router.navigateByUrl('/login?rnd=' + rnd);
  }

}
