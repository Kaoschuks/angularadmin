import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalsService } from './core/globals.service';
import { StorageServices } from './core/storage-services.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsHandler } from '../interceptors/errors-handler';


export function initializeApp(globals: GlobalsService) {
  return (): void => { 
    try {
      globals.storage.persistStorage(Date.now());
      setTimeout(() => {
        globals.showsplash = false
      }, 1000)
    }catch(ex) {
      console.log(ex);
    }
  }
}


export const providers: Array<any> = [
  NgxSpinnerService,
  GlobalsService, StorageServices,
  { 
    provide: APP_INITIALIZER, 
    useFactory: initializeApp,
    deps: [ GlobalsService ], 
    multi: true
  },
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: ErrorsHandler, 
    multi: true 
  },
]

@NgModule({
	imports: [
    CommonModule,
    HttpClientModule,
	],
  providers: providers
})
export class ServicesModule { }
