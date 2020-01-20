export class ConfirmAccountInfo {
  verificationToken: string;

  constructor(verificationToken: string) {
    this.verificationToken = verificationToken;
  }
}
