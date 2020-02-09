export class Response {
  body: Body;
  headers: object;
  status: number;
  // message: string;
  // result: Result;

  constructor(  body: Body,  headers: object,  status: number) {
    this.body = body;
    this.headers = headers;
    this.status = status;
    // this.message = message;
    // this.result = result;
  }
}

export class Body {
  status: number;
  message: string;
  result: Result;
}

export class Result {
  formId: number;
  createdAt: string;
}
