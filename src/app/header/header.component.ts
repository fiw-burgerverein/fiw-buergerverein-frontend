import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail: any;
  isLoggedIn = false;
  roles: string[] = [];
  authority: string;


  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.userEmail = this.tokenStorage.getEmail();
      this.roles.every(role => {
        if (role === 'ROLE_ROLE_ADMIN') {
          this.authority = 'admin';
        } else if (role === 'ROLE_ROLE_GS') {
          this.authority = 'gs';
        } else if (role === 'ROLE_ROLE_USER') {
          this.authority = 'user';
        }
      });
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
/*    window.location.reload();*/
    this.router.navigate(['']);

  }
/*
  reloadHeader() {
    this.location.reload();
  }*/

}
