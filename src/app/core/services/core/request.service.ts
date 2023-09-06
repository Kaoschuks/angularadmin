import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class RequestService {
  jwt: string | undefined;
  url: string = environment.url;
  private http = inject(HttpClient)

  constructor() {}

  async get(routes: string) {
    return await this.http.get(this.url + routes).toPromise();
  }

  async post(routes: string, data: any) {
    return await this.http.post(this.url + routes, data).toPromise();
  }

  async update(routes: string, data: any) {
    return await this.http.put(this.url + routes, data).toPromise();
  }

  async delete(routes: string, data: any = {}) {
    return await this.http.delete(this.url + routes, data).toPromise();
  }

  async upload(url: string, data: any) {
    return await new Promise((resolve, reject) => {
      try {
        let requestOptions: any = {
          method: "POST",
          body: data,
          redirect: "follow",
        };

        fetch(environment.url + url, requestOptions)
          .then((response) => response.json())
          .then((result) => resolve(result))
          .catch((error) => {
            throw new Error(error);
          });
      } catch (ex) {
        reject(ex);
      }
    });
  }
}
