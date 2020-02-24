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

  constructor(private router: Router, private helperService: HelperService) {
    const count = +localStorage.getItem('count') || 0;
    if (!count) {
      localStorage.setItem('count', '1');
      window.location.reload();
    }
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.helperService.removeAllCookies();
    localStorage.clear();
    const rnd = Math.random();
    this.router.navigateByUrl('/login?rnd=' + rnd);
  }

}
