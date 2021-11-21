import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:         '',
    loadChildren: (): Promise<any> => import('../modules/admin/admin.module').then((m: any) => m.AdminModule),
  },
  {
    path:         '',
    loadChildren: (): Promise<any> => import('../modules/user/user.module').then((m: any) => m.UserModule),
  },
  {
    path:         '',
    loadChildren: (): Promise<any> => import('../modules/journal/journal.module').then((m: any) => m.JournalModule),
  },
  {
    path:       '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
