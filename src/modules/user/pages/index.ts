import { Type }               from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent }  from './user-page/user-page.component';
export { UserPageComponent}   from './user-page/user-page.component';
export { LoginPageComponent } from './login-page/login-page.component';

export const USER_PAGES: Type<any> [] = [
  UserPageComponent,
  LoginPageComponent
];
