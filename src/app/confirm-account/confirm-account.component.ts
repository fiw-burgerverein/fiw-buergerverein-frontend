import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConfirmAccountInfo} from '../auth/confirm-account-info';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  verificationToken: string;
  accountInfo: ConfirmAccountInfo;
  isActivated = false;
  activationFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.verificationToken = params.token;

    });
    console.log(this.verificationToken);

    this.accountInfo = new ConfirmAccountInfo(this.verificationToken);
    this.authService.confirmAccount(this.accountInfo).subscribe(
      data => {
        console.log(data);
        this.isActivated = true;
        this.activationFailed = false;
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.activationFailed = true;
        this.router.navigate(['/registrieren']);
      }
    );
      // response => {
      //   console.log(HttpResponse);
        // if (response === '200') {
        //   this.router.navigate(['/login']);
        // }

        // else {
        //   this.router.navigate(['/registrieren']);
        // }
    //   }
    // );
  }

  getErrorMessage() {
    return 'Error'; // TODO
  }

}
