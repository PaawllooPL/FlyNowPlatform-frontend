import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { RegisterUser } from '../../dto/registerUser.interface';
import { AuthTokens } from '../../models/authTokens.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private apiUrl = environment.apiUrl.baseUrl + '/authentication';
  private tokenKey = 'auth_token'; //local storage key

  constructor(private http: HttpClient) {}
  
  
  public register(userData: RegisterUser): any {
    console.log(userData)
    console.log(environment.apiUrl.registerUrl)
    this.http.post<AuthTokens>(environment.apiUrl.registerUrl, userData, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept' : 'application/json' 
      }
    })//.pipe(
      // tap(response => {
      //   console.log("Setting jwt token...");
      //   localStorage.setItem(this.tokenKey, response.authenticationToken)
      //   console.log("Setted jwt token");
      //   console.log(response.authenticationToken)
      // }),
      // catchError(error => {
      //   console.error("register service error: " + error);
      //   throw error;
      // })
    // )
    .subscribe(response => {
        console.log("Setting jwt token...");
        localStorage.setItem(this.tokenKey, response.authenticationToken)
        console.log("Setted jwt token");
        console.log(response.authenticationToken)
    });
  }
  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
  //     .pipe(
  //       // Handle response with tokens
  //       tap(response => {
  //         if (response && response.accessToken) {
  //           localStorage.setItem(this.tokenKey, response.accessToken); // Store the JWT token
  //         }
  //       })
  //     );
  // }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public isAuthenticated(): boolean {
    return !!this.getToken(); // Return true if a token exists
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

}
