import {Application} from './application.model';
import {Deserializable} from './desirializable.model';

export class Geschaeftsstelle implements Deserializable {
  // status: number;
  // message: string;
  applications: Application[];

  constructor(data: any) {
    this.applications = new Array(data.result.length);
    this.applications = Object.values<Application>(data.result);
  }

  deserialize(data: any): this {
    Object.assign(this, data.result);
    return this;
  }
}

// export class Response {
//   body: Body;
//   headers: object;
//   status: number;
//   // message: string;
//   // result: Result;
//
//   constructor(  body: Body,  headers: object,  status: number) {
//     this.body = body;
//     this.headers = headers;
//     this.status = status;
//     // this.message = message;
//     // this.result = result;
//   }
// }
//
// export class Body {
//   status: number;
//   message: string;
//   result: Result;
// }
