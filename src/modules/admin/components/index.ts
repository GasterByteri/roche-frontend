import { Type }                       from '@angular/core';
import { AdminDoctorsListComponent }  from './admin-doctors-list/admin-doctors-list.component';
import { AdminPatientsListComponent } from './admin-patients-list/admin-patients-list.component';

export { AdminDoctorsListComponent } from './admin-doctors-list/admin-doctors-list.component';
export { AdminPatientsListComponent } from './admin-patients-list/admin-patients-list.component';

export const ADMIN_COMPONENTS: Type<any> [] = [
  AdminDoctorsListComponent,
  AdminPatientsListComponent,
];
