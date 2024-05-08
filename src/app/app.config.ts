import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { NetworkInterceptor, RequestInterceptorService, CachingInterceptor, GlobalErrorHandlerService, GlobalsService } from './core';


export function initializeApp(
  globals: GlobalsService, 
) {
  return async () => { 
    try {
      globals.showsplash = true
      setTimeout(() => {
        globals.showsplash = false
      }, 5000);
    } catch (error) {
      console.log(error)
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializeApp,
      deps: [ GlobalsService ], 
      multi: true
    },
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(
      routes, withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: NetworkInterceptor, 
      multi: true 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ]
};
