export class SignUpInfo {
  email: string;
  emailConfirm: string;
/*  role: string[];*/
  password: string;
  passwordConfirm: string;


  constructor(email: string, emailConfirm: string, password: string, passwordConfirm: string) {
    this.email = email;
    this.emailConfirm = emailConfirm;
/*    this.role = ['user'];*/
    this.password = password;
    this.passwordConfirm = passwordConfirm;
  }
}
