export class Result {
  formId: number;
  createdAt: string;

  constructor(data: any) {
    Object.assign(this, data.result);
  }
}
