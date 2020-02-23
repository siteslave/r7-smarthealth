import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private helperService: HelperService) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    this.helperService.removeAllCookies();
    const rnd = Math.random();
    this.router.navigateByUrl('/login?rnd=' + rnd);
  }

}
