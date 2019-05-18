import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.module/login.component';
import {MainComponent} from './main/main.component';
import {IsAuthGuard} from './shared/guards/is-auth.guard';
import {UsersComponent} from './main/users/users.component';
import {NavComponent} from './main/nav/nav.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: '',
      component: MainComponent,
      canActivate: [IsAuthGuard],
      children: [
        {
          path: '',
          component: NavComponent
        },
        {
          path: 'users',
          component: UsersComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
