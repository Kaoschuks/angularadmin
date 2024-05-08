import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalsService } from '..';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

    private globals: GlobalsService = inject(GlobalsService);
    private internet: boolean = true;

    intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        const isOnline = window.navigator.onLine;
        !isOnline ? this.isOffline() : this.isOnline() ;
        
        return handler.handle(request).pipe(
            catchError(error => {
                this.internet = false
                // Handle errors
                // console.error('Error:', error);
                return throwError(error || 'Network error');
            })
        );
    }

    isOffline() {
        this.internet = false
        // this.globals.toastAlert('You are currently offline. please connect to a network to enjoy our full features');
        return throwError('You are offline');
    }

    isOnline() {
        this.internet = true
    }
}
