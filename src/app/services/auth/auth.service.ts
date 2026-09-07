import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { RegisterUser } from '../../dto/registerUser.interface';
import { AuthTokens } from '../../models/authTokens.interface';
import { jwtDecode } from 'jwt-decode';
import { CustomJwtPayload } from '../../models/customJwtPayload.interface';
import { Permission } from '../../models/permissions/permissions.enum';
import { RolePermissions } from '../../models/permissions/role-permissions';
import { Roles } from '../../models/roles.enum';
import { CustomJwtRefreshPayload } from '../../models/customJwtRefreshPayload.interface';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

  private tokenKey = 'auth_token'; //local storage key
  private refreshTokenKey = 'auth_refresh_token';

  constructor(private http: HttpClient, private router: Router) {}
  
  
  public register(userData: RegisterUser): Observable<any> {
    console.log(userData)
    console.log(environment.apiUrl.registerUrl)
    return this.http.post<AuthTokens>(environment.apiUrl.registerUrl, userData, {
      headers: { 
        'Content-Type': 'application/json',
        'Accept' : 'application/json' 
      }
    }).pipe(
      tap(response => { 
        // console.log("Setting jwt token...");
        // localStorage.setItem(this.tokenKey, response.authenticationToken)
        // console.log("Setted jwt token");
      }),
      catchError(error => {
        console.error("register error: " + error);
        throw error;
      })
    )
  }
  
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }
  
  login(email?: string, password?: string) : Observable<AuthTokens | null> {
    console.log(email)
    return this.http.post<AuthTokens>(environment.apiUrl.loginUrl, { email, password }) //sending login and password
      .pipe(
        tap(response => {
          console.log(jwtDecode(response.authenticationToken))
          if (response && response.authenticationToken && response.refreshToken) { //check if tokens exists
            this.setToken(response.authenticationToken); //store jwt token
            this.setRefreshToken(response.refreshToken); //store jwt token
            console.log(this.getRoles());
          }
        }),
        catchError(error => {
          console.error("login error: " + error);
          return of(null);
        }),
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  public getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  public isAuthenticated(): boolean {
    try {
      const token = this.getToken();
      if(!token) {
        return false;
      }
      const parsedToken = jwtDecode(this.getToken() ?? "");
      if (parsedToken.exp! < (new Date).getTime()/1000) {
        console.log("przedawniony")
        return false;
      } else {
        console.log("nie przedawniony")
        return true;
      }
    } catch (error) {
      console.error("Invalid token");
      return false;
    }
  }

  public getRoles(): string[] {
    const token = this.getToken();
    if(!token) {
      return [];
    }
    
    const decodedToken = jwtDecode<CustomJwtPayload>(token);
    return decodedToken.roles?.map(role => role.authority) ?? [];
  }

  public getTokenLeftTime(): number | null {
    const token = this.getToken();
    if(!token) {
      return null;
    }
    const decodedToken = jwtDecode<CustomJwtRefreshPayload>(token);
    return decodedToken.exp! - (new Date).getTime()/1000
  }

  public getRefreshTokenLeftTime(): number | null {
    const refreshToken = this.getRefreshToken();
    if(!refreshToken) {
      return null;
    }
    const decodedRefreshToken = jwtDecode<CustomJwtRefreshPayload>(refreshToken);
    return decodedRefreshToken.exp! - (new Date).getTime()/1000
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  public hasRole(role: Roles) {
    if (!this.isAuthenticated())
      return false;
    let userRoles: string[] = this.getRoles();
    if(userRoles.includes(role))
      return true;
    return false;
  }

  public hasPermission(requiredPermission: Permission) {
    if (!this.isAuthenticated())
      return false;
    let hasPermission = false;
    let userRoles: string[] = this.getRoles();

    for (const role of userRoles) {
      const rolePermissions: Permission[] = RolePermissions[Roles[role as keyof typeof Roles]];

      for (const rolePermission of rolePermissions) {
        if(rolePermission == requiredPermission)
          return true;
      }
    }
    return false;
  }

}
