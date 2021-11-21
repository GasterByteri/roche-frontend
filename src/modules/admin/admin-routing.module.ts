import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard }  from '../../shared';
import { AdminPageComponent }   from './pages';

const routes: Routes = [
  {
    path:     '',
    children: [
      {
        path:        'admin',
        component:   AdminPageComponent,
        canActivate: [AuthenticationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
