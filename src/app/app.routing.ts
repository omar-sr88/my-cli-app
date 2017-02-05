import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import {LoginComponent } from './login/login.component';
import {SignupComponent } from './signup/signup.component';
import {AccountComponent } from './account/account.component';

const mimoRoutes: Routes = [
    
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
    
    
];

export const mimoRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(mimoRoutes);