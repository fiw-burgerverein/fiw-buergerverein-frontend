import {Application} from './application.model';
import {Deserializable} from './desirializable.model';

export class AllApplications implements Deserializable {
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
