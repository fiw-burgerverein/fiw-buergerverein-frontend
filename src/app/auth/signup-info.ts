export class SignUpInfo {
  email: string;
  role: string[];
  password: string;


  constructor(email: string, password: string) {
    this.email = email;
    this.role = ['user'];
    this.password = password;
  }
}
