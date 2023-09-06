import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // state: RouterStateSnapshot; 
    url: any; 
    cur: any;
    constructor(
        // private router: Router, private jwtHelper: JwtHelperService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.cur = req.url;
        this.url = this.cur.split('/').slice(-2)[0]; // console.log(this.url);
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // Authorization: `Bearer ` + this.jwtHelper.tokenGetter()
            }
        });
        // this.error.request(req);
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                // console.log(event);
                if (event.body && event.ok) {
                    console.log(event.body);
                }
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                console.log(err.status)
            }
            const msg = err.error.message || err.message;
        }));
    }
}

