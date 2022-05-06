import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/authGuard/auth.guard";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),

  },
  {
    path: 'plays',
    loadChildren: () => import('./pages/plays/plays.module').then(m => m.PlaysModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  {
    path: 'my-tickets',
    loadChildren: () => import('./pages/my-tickets/my-tickets.module').then(m => m.MyTicketsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

