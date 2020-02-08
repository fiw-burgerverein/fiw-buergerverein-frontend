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

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.userEmail = this.tokenStorage.getEmail();
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
