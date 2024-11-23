import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { OfferDetailsComponent } from './pages/offer-details/offer-details.component';
import { CreateOfferComponent } from './pages/create-offer/create-offer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Permission } from './models/permissions/permissions.enum';
import { RolePermissions } from './models/permissions/role-permissions';
import { PermissionAuthGuard } from './services/authGuard/permissionAuthGuard';
import { LoginAuthGuard } from './services/authGuard/loginAuthGuard';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
        canActivate: [LoginAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full', 
        canActivate: [LoginAuthGuard]
    },
    {
        path: 'offers',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'offers/create',
        component: CreateOfferComponent,
        pathMatch: 'full',
        canActivate: [PermissionAuthGuard],
        data: {
            requiredPermission: Permission.CreateOffer
        }
    },
    {
        path: 'offers/:id',
        component: OfferDetailsComponent,
        pathMatch: 'full',
    },
    {
        path: 'error',
        component: ErrorComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
