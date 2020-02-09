import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {NavigationEnd, Router} from '@angular/router';
/*import { TokenStorageService } from './auth/token-storage.service';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fiw-buergerverein-frontend';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
/*  private roles: string[];
  private authority: string;*/

/*  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
/!*    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ROLE_ADMIN') {
          this.authority = 'admin';
        } else if (role === 'ROLE_ROLE_GS') {
          this.authority = 'gs';
        }
        this.authority = 'user';
      });
    }
  }*!/
}*/
