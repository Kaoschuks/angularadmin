import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageServices {
  secret: string = environment.secretKey;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService) { }
  encrypt(data: any, key: any): any {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  }

  decrypt(data: any, key: any): any{
    let bytes = CryptoJS.AES.decrypt(data, key);
    if(bytes.toString(CryptoJS.enc.Utf8) != '') {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
  }

  saveItem = (key: string, data: {}) => {
    return this.storage.set(
      key,
      this.encrypt(data, this.secret)
    );
  }

  getItem = async (key: string): Promise<any> => {
    return await new Promise((resolve, reject) => {
      var encryptedRes = this.storage.get(key);

      if (encryptedRes != null) {
        resolve(this.decrypt(encryptedRes, this.secret));
      } else {
        resolve(encryptedRes);
      }

    });
  }

  removeItem = (key: string) => {
    return this.storage.remove(this.encrypt(key, this.secret));
  }

  clear = () => {
    return this.storage.clear();
  }

  persistStorage(currentDate: any) {
    if (!sessionStorage.length) {
      localStorage.setItem('getSessionStorage', currentDate);
    };
    window.addEventListener('storage', (event: any) => {
        if (event.key == 'getSessionStorage') {
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            localStorage.removeItem('sessionStorage');

        } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
            let data: any = JSON.parse(event.newValue), value;

            for (const key in data) {
                sessionStorage.setItem(key, data[key]);
            }
        }
    });
    window.onbeforeunload = function() {
        //sessionStorage.clear();
    };
  }
}

