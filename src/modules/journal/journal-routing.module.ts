import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard }  from '../../shared';
import { JournalPageComponent } from './pages';


const routes: Routes = [
  {
    path:     '',
    children: [
      {
        path:        'journal',
        component:   JournalPageComponent,
        canActivate: [AuthenticationGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
