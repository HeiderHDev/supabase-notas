import { Routes } from "@angular/router";

export default [
  {
    path: 'sign-up',
    loadComponent: () => import('../auth-sing-up/auth-sing-up.component').then(m => m.AuthSingUpComponent),
  },
  {
    path: 'log-in',
    loadComponent: () => import('../auth-log-in/auth-log-in.component').then(m => m.AuthLogInComponent),
  },
  {
    path: '**',
    redirectTo: 'log-in'
  }
] as Routes;