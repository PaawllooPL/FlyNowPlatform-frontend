import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, from, lastValueFrom, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment.development';
import { AuthTokens } from '../../models/authTokens.interface';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handle(req, next)).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          console.error("Server is unreachable (ERR_CONNECTION_REFUSED)");
          this.router.navigate(['/error']);
          alert('Connection error: Unable to reach the server')
          return throwError(() => new Error("Server is unreachable (ERR_CONNECTION_REFUSED)"));
        }
        return throwError(() => error);
      })
    );
  }

  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    console.log("request intercepted")
    // get token from auth service
    const token = this.authService.getToken();

    // if token exists add authorization header
    if (token) {
      if (this.authService.getTokenLeftTime()! >= (60 * 5)) {
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authService.getToken()}`
          }
        });
        return lastValueFrom(next.handle(clonedRequest));
      }
      else {
        if (!this.isRefreshing) {
          if (this.authService.getRefreshTokenLeftTime()! > 0) {// operator '!' bo isAuthenticated() już sprawdza czy token istnieje
            try {
              this.isRefreshing = true; //without that, refresh request was triggering auth interceptor resulting in 200 refresh requests
              const refreshTokenResponse = await lastValueFrom(this.http.post<AuthTokens>(environment.apiUrl.refreshUrl, null, //if token soon or already expired
                {
                  observe: 'response',
                  params: {
                    'token': this.authService.getRefreshToken()!
                  }
                }));

              if (refreshTokenResponse.status != 200) {
                this.isRefreshing = false;
                return lastValueFrom(next.handle(req));
              }

              // if status 200 = if resfreshed
              this.authService.setToken(refreshTokenResponse.body!.authenticationToken);
              this.authService.setRefreshToken(refreshTokenResponse.body!.refreshToken);
              const clonedRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.getToken()}`
                }
              });
              this.isRefreshing = false;
              return lastValueFrom(next.handle(clonedRequest));

            } catch (error) {
              this.authService.logout();
              this.isRefreshing = false;
              return lastValueFrom(next.handle(req));
            }
          }
          else {
            this.authService.logout();
            this.isRefreshing = false;
            return lastValueFrom(next.handle(req))
          }
        }
        return lastValueFrom(next.handle(req)); //if refresh request caught
      }
    }
    // if token null pass og request
    return lastValueFrom(next.handle(req));
  }
}
