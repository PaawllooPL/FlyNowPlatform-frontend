import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const routeData = route.data;
    if(routeData['requiredPermission']) {
      if (!this.authService.hasPermission(routeData['requiredPermission'])) {
        this.router.navigate(['/error'], {
          queryParams: {message: "Missing required permission."}
        });
        return false;
      }
    }
    if(routeData['requiredRole']) {
      return this.authService.hasRole(routeData['requiredRole'])
    }

    return true;
  }
}
