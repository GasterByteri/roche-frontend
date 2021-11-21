import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent }   from './pages';
import { UserPageComponent }    from './pages';

const routes: Routes = [
  {
    path:     '',
    children: [
      {
        path:        'preferences',
        component:   UserPageComponent,
        // canActivate: [AuthGuard],
      },
      {
        path:        'login',
        component:   LoginPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
