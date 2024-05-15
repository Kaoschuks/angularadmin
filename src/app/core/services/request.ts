import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from '../../../environments/environment';

@Injectable()
export class RequestService {
  jwt: string | undefined;
  url: string = environment.url;
  private http: HttpClient = inject(HttpClient);

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
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await fetch(environment.url + url, {
          method: "POST",
          body: data,
          redirect: "follow",
        }).then((response) => response.json());
        resolve(resp)
      } catch (ex) {
        reject(ex);
      }
    });
  }
}
